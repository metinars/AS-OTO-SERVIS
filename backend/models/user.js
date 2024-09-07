const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Lütfen isminizi girin'],
    },
    userName: {
      type: String,
      required: [true, 'Lütfen kullanıcı adınızı girin'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Lütfen email adresinizi ekleyin'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Lütfen geçerli bir e-posta ekleyin',
      ],
      unique: true,
    },
    password: {
      type: String,
      minlength: [8, 'Şifre 8 karakter uzunluğunda olmalıdır'],
      required: [true, 'Lütfen bir şifre ekleyin'],
      select: false,
    },
    avatar: {
      type: String,
      default: '',
    },
    role: {
      type: String,
      default: 'user',
    },
    resetPasswordToken: String,
    resetPasswordDate: Date,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
