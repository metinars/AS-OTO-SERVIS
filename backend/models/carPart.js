const mongoose = require('mongoose');

const carPartSchema = new mongoose.Schema(
  {
    adverNo: {
      type: Number,
      unique: true,
    },
    category: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    advert: {
      type: String,
      require: true,
    },
    carMarka: {
      type: String,
      require: true,
    },
    carModel: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    adress: {
      city: {
        type: String,
        require: true,
      },
      district: {
        type: String,
        require: true,
      },
      adressDescription: {
        type: String,
      },
    },
    price: {
      type: String,
      default: 'fiyat İçin İletişime Geç',
    },
    uId: {
      type: String,
      require: true,
    },
    uName: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('carPartSchema', carPartSchema);
