import express from 'express';
import roleController from '../controllers/role.controller';
const RoleRoutes = express.Router();

RoleRoutes.route("/")
  .get(
    roleController.getRoles,
  );

RoleRoutes.route("/")
  .post(
    roleController.createRole,
  );

export default RoleRoutes;
