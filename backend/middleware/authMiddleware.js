const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authenticationMid = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    console.log('Authorization Header:', req.headers.authorization);

    try {
      // Bearer kelimesini ve token'ı ayırmak
      token = req.headers.authorization.split(' ')[1];

      if (!token) {
        console.log('Token bulunamadı');
        return res
          .status(401)
          .json({ message: 'Not authorized, token missing' });
      }

      // Token'ı konsola yazdırarak kontrol edelim
      console.log('Received Token:', token);

      const decoded = jwt.verify(token, process.env.JWT_TOKEN);

      // decoded bilgiyi konsola yazdırarak kontrol edelim
      console.log('Decoded Token:', decoded);

      req.user = await User.findById(decoded.id).select('-password');

      if (!req.user) {
        return res
          .status(401)
          .json({ message: 'Not authorized, user not found' });
      }

      console.log('User:', req.user);
      next();
    } catch (error) {
      console.error('JWT Verification Error:', error);

      if (error.name === 'JsonWebTokenError') {
        return res
          .status(401)
          .json({ message: 'Not authorized, token malformed' });
      }

      if (error.name === 'TokenExpiredError') {
        return res
          .status(401)
          .json({ message: 'Not authorized, token expired' });
      }

      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    console.log('Authorization header bulunamadı veya yanlış formatta');
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { authenticationMid };
