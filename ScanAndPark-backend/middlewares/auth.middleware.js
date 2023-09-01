import jwt from "jsonwebtoken";

export default {
  verifyToken: async (req, res, next) => {
    const bearerHeader = req.headers.authorization
      || req.body.token
      || req.query.token
      || req.headers['x-access-token'];

    if (typeof bearerHeader !== 'undefined') {
      try {
        const bearer = bearerHeader.split(' ');
        const token = bearer[1];
        jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, user) => {
          if(err) return res.status(401).send({
            message: "Invalid token provided",
            success: false
          });
          req.authUser = user;
          return next();
        });
      } catch (error) {
        return next(error);
      }
    } else {
      return res.status(403).send({
        message: "No authentication token provided",
        success: false
      });
    }
  },
  isAuthorized: async (req, res, next) => {
    if (req.authUser) {
      next();
    } else {
      return res.status(401).send({
        message: 'You are not authorised to perform this action.',
        success: false,
      });
    }
  },
  isAdmin: async (req, res, next) => {
    if (req.authUser && req.authUser.user.roleId === 1) {
      next();
    } else {
      return res.status(401).send({
        message: 'You do not have privilege to perform this action.',
        success: false,
      });
    }
  }
};
