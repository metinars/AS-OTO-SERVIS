const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const register = async (req, res) => {
  try {
    const { name, email, password, avatar } = req.body;

    let uploadedAvatar = { public_id: '', url: '' };

    if (avatar) {
      uploadedAvatar = await cloudinary.uploader.upload(avatar, {
        folder: 'avatars',
        width: 148,
        crop: 'scale',
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Şifre 6 karakter veya daha fazla olmalıdır',
      });
    }

    const emailLowerCase = email.toString().toLowerCase();
    const existedUser = await User.findOne({ email: emailLowerCase });

    if (existedUser) {
      return res
        .status(400)
        .json({ success: false, message: 'Kullanıcı zaten var!' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email: emailLowerCase,
      password: hashedPassword,
      avatar: {
        public_id: uploadedAvatar.public_id,
        url: uploadedAvatar.url,
      },
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
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: 'Email ve şifre gereklidir' });
    }

    const emailLowerCase = email.toLowerCase();
    const existedUser = await User.findOne({ email: emailLowerCase }).select(
      '+password'
    );

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

    res.status(200).json({
      success: true,
      result: { user: existedUser, token },
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

module.exports = {
  register,
  login,
  userDetail,
};
