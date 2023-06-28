import { allowedOrigins } from '../config/corsOptions.js';

// middleware to allow credentials, if origin is allowed in corsOptions
const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Credentials', true);
  }
  next();
};

export default credentials;
