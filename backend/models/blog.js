const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Lütfen bir başlık girin'],
      min: 1,
    },
    desc: {
      type: String,
      required: [true, 'Lütfen bir açıklama giriniz'],
      min: 3,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    status: {
      type: String,
      default: 'aktif',
    },
    titleUrl: {
      type: String,
      required: true,
      unique: true,
    },
    uId: {
      type: String,
      required: true,
    },
    uName: {
      type: String,
      required: true,
    },

    metaTitle: {
      type: String,
      default: '',
    },
    metaDescription: {
      type: String,
      default: '',
    },
    metaKeywords: {
      type: [String],
      default: [],
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
