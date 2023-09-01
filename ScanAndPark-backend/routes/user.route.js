import express from 'express';
import userController from '../controllers/user.controller';
import AuthMiddleware from '../middlewares/auth.middleware';

const UserRoutes = express.Router();

UserRoutes.route("/")
  .get(
    userController.getUsers,
  );

UserRoutes.route("/register")
  .post(
    userController.createUser,
  );

UserRoutes.route("/login")
  .post(
    userController.loginUser,
  );

UserRoutes.route("/:userId")
  .delete(
    AuthMiddleware.isAdmin,
    userController.deleteUser,
  );

UserRoutes.route("/:email")
  .get(
    userController.getUserByEmail
  );

UserRoutes.route("/:id")
  .get(
    userController.getUser
  );

UserRoutes.route("/:id")
  .patch(
    AuthMiddleware.verifyToken,
    AuthMiddleware.isAdmin,
    userController.updateUser
  );

UserRoutes.route("/:id/approve-residential")
  .put(
    AuthMiddleware.verifyToken,
    AuthMiddleware.isAdmin,
    userController.approveResidential
  );

export default UserRoutes;
