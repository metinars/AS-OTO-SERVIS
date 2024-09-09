const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const upload = require('../config/multerConfig');
const path = require('path');

const userGetAll = async (req, res) => {
  const users = await User.find().sort({ _id: -1 });
  res.status(200).json({ success: true, result: users });
};

const register = async (req, res) => {
  try {
    const { name, userName, email, password } = req.body;
    let avatarUrl = '';

    if (req.file) {
      avatarUrl = `${req.protocol}://${req.get('host')}/uploads/users/${
        req.file.filename
      }`;
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Şifre 6 karakter veya daha fazla olmalıdır',
      });
    }

    const emailLowerCase = email.toString().toLowerCase();
    const userNameLowerCase = userName.toString().toLowerCase();

    const existedUser = await User.findOne({
      email: emailLowerCase,
      userName: userNameLowerCase,
    });

    if (existedUser) {
      return res
        .status(400)
        .json({ success: false, message: 'Kullanıcı zaten var!' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      userName: userNameLowerCase,
      email: emailLowerCase,
      password: hashedPassword,
      avatar: avatarUrl, // URL'yi kaydedin
    });

    const token = await jwt.sign({ id: user._id }, process.env.JWT_TOKEN, {
      expiresIn: '1h',
    });

    res.status(201).json({
      success: true,
      result: { user, token },
    });
  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ success: false, message: 'Sunucu hatası' });
  }
};

const login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res
        .status(400)
        .json({ success: false, message: 'Kullanıcı adı ve şifre gereklidir' });
    }

    const userNameLowerCase = userName.toLowerCase();
    const existedUser = await User.findOne({
      userName: userNameLowerCase,
    }).select('+password');

    if (!existedUser) {
      return res
        .status(404)
        .json({ success: false, message: 'Kullanıcı yok!' });
    }

    const correctedPassword = await bcrypt.compare(
      password,
      existedUser.password
    );

    if (!correctedPassword) {
      return res
        .status(400)
        .json({ success: false, message: 'Geçersiz kimlik bilgileri' });
    }

    const token = await jwt.sign(
      { id: existedUser._id },
      process.env.JWT_TOKEN,
      {
        expiresIn: '1h',
      }
    );

    existedUser.password = undefined;

    res.status(200).json({
      success: true,
      result: { user: existedUser, token },
      message: 'Giriş Başarılı',
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const userDetail = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({ user });
  } catch (error) {
    console.error('User Detail Error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const forgotPassword = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  console.log(user);
  if (req.body.email == null) {
    return res.status(500).json({ message: 'Lütfen bir email adres giriniz' });
  }
  if (!user) {
    return res.status(500).json({ message: 'Böyle bir kullanıcı bulunamadı' });
  }

  const resetToken = crypto.randomBytes(20).toString('hex');

  user.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  user.resetPasswordDate = Date.now() + 15 * 60 * 1000;

  await user.save({ validateBeforeSave: false });

  const passwordUrl = `${process.env.CLIENT_URL}/reset/${resetToken}`;

  const message = `Şifrenizi sıfırlamak için gerekli bağlantı : ${passwordUrl}`;

  try {
    const transporter = nodemailer.createTransport({
      port: 465,
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: 'nodemailler29@gmail.com',
        pass: 'pfgv gndz yaau ipbd',
      },
      secure: true,
    });

    const mailData = {
      from: 'nodemailler29@gmail.com',
      to: req.body.email,
      subject: 'Şifre Sıfırlama',
      text: message,
    };

    await transporter.sendMail(mailData);

    res
      .status(200)
      .json({ message: 'E-posta gönderildi. Gelen kutunuzu kontrol edin.' });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordDate = undefined;

    await user.save({ validateBeforeSave: false });

    res.status(500).json({ message: error.message });
  }
};

const resetPassword = async (req, res) => {
  try {
    console.log('resetPassword girdi');
    console.log('Token:', req.params.token);

    // Token'ı hashleyin
    const resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');

    console.log('Hashed Token:', resetPasswordToken);

    // Token ve tarih kontrolü
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordDate: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(500)
        .json({ message: 'Geçersiz veya süresi dolmuş token' });
    }

    console.log('Buraya kadar geldi');

    const changePassword = req.body.password;

    // Şifre kontrolü
    if (!changePassword || changePassword.length < 6) {
      return res.status(400).json({
        message: 'Şifre 6 karakter veya daha fazla olmalıdır',
      });
    }

    // Şifreyi hashleyin
    const passwordHash = await bcrypt.hash(changePassword, 10);

    // Kullanıcının şifresini güncelleyin
    user.password = passwordHash;
    user.resetPasswordDate = undefined;
    user.resetPasswordToken = undefined;

    await user.save();

    // Yeni JWT token oluşturun
    const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN, {
      expiresIn: '1h',
    });

    const cookieOptions = {
      httpOnly: true,
      expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 gün
    };

    // Yanıt gönderin
    res.status(200).cookie('token', token, cookieOptions).json({
      user,
      token,
      message: 'Şifre başarıyla güncellendi',
    });
  } catch (error) {
    console.error('Şifre sıfırlama hatası:', error.message);
    res
      .status(500)
      .json({ message: 'Şifre sıfırlama sırasında bir hata oluştu' });
  }
};

const changePassword = async (req, res) => {
  try {
    const { userName, nowPassword, newPassword } = req.body;

    const user = await User.findOne({ userName }).select('+password');

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: 'Kullanıcı bulunamadı!' });
    }

    const isPasswordCorrect = await bcrypt.compare(nowPassword, user.password);

    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ success: false, message: 'Mevcut şifreniz yanlış.' });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Yeni şifre 6 karakter veya daha fazla olmalıdır',
      });
    }

    const newPasswordHash = await bcrypt.hash(newPassword, 10);

    user.password = newPasswordHash;
    await user.save();

    res
      .status(200)
      .json({ success: true, message: 'Şifreniz başarıyla güncellendi.' });
  } catch (error) {
    console.error('Change Password Error:', error);
    res.status(500).json({ success: false, message: 'Sunucu hatası' });
  }
};

module.exports = {
  register,
  login,
  userDetail,
  forgotPassword,
  resetPassword,
  userGetAll,
  changePassword,
};
