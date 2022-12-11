import jwt from 'jsonwebtoken';
import { createError } from './error.js';

// Verifify Token

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, 'Not Authenticated'));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(createError(403, 'token not valid'));
    }
    req.user = user;
    next();
  });
};

// Verifify User

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, 'Not Authorized'));
    }
  });
};

// Verifify Admin

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, 'Not Authorized'));
    }
  });
};
