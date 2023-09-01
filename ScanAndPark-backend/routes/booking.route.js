import express from 'express';
import AuthMiddleware from '../middlewares/auth.middleware';
import bookingController from "../controllers/booking.controller";

const BookingRoutes = express.Router();

BookingRoutes.route("/:status?")
  .get(
    AuthMiddleware.verifyToken,
    bookingController.getBookings,
  );

BookingRoutes.route("/book-slot")
  .post(
    AuthMiddleware.verifyToken,
    bookingController.bookSlot,
  );

BookingRoutes.route("/unbook-slot")
  .post(
    AuthMiddleware.verifyToken,
    bookingController.unbookSlot,
  );

export default BookingRoutes;
