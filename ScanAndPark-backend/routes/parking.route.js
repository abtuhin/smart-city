import express from 'express';
import parkingController from '../controllers/parking.controller';
import AuthMiddleware from '../middlewares/auth.middleware';

const ParkingRoutes = express.Router();

ParkingRoutes.route("/:status?")
  .get(
    AuthMiddleware.verifyToken,
    parkingController.getParkings,
  );

ParkingRoutes.route("/")
  .post(
    AuthMiddleware.verifyToken,
    AuthMiddleware.isAdmin,
    parkingController.createParking,
  );

ParkingRoutes.route("/:parkingId")
  .delete(
    AuthMiddleware.verifyToken,
    AuthMiddleware.isAdmin,
    parkingController.deleteParking,
  );

export default ParkingRoutes;
