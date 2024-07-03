const mongoose = require('mongoose');

const carProductSchema = new mongoose.Schema(
  {
    advertNo: {
      type: Number,
      unique: true,
    },
    marka: {
      type: String,
      require: true,
    },
    model: {
      type: String,
      require: true,
    },
    year: {
      type: Number,
      require: true,
    },
    fuel: {
      type: String,
      require: true,
    },
    gear: {
      type: String,
      require: true,
    },
    vehicleStatus: {
      type: String,
      require: true,
    },
    kilometer: {
      type: Number,
      require: true,
    },
    caseType: {
      type: String,
      require: true,
    },
    motorPower: {
      type: Number,
      require: true,
    },
    color: {
      type: String,
      require: true,
    },
    damageRecord: {
      status: {
        type: String,
        require: true,
      },
      damageValue: {
        type: Number,
        require: true,
      },
    },
    price: {
      type: Number,
      default: 'İletişime Geç',
      require: false,
    },
    category: {
      type: String,
      require: true,
      unique: true,
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
    uId: {
      type: String,
      require: true,
    },
    uName: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongose.model('carProduct', carProductSchema);
