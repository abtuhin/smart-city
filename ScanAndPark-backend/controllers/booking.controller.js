import bookingService from "../services/booking.service";

export default {
  getBookings: async (req, res) => {
    try {
      const bookings = await bookingService.getBookings(req.query.status);
      res.status(200).json({
        data: bookings,
        message: 'Bookingss fetched successfully!',
        success: true,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message, success: false });
    }
  },
  bookSlot: async (req, res) => {
    try {
      const reqBody = {
        userId: req.authUser.user.id,
        qrCode: req.body.qrCode
      }
      const booking = await bookingService.bookSlot(reqBody);
      res.status(200).json({
        data: booking,
        message: 'Booking slot booked successfully!',
        success: true,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message, success: false });
    }
  },
  unbookSlot: async (req, res) => {
    try {
      const reqBody = {
        userId: req.authUser.user.id,
        qrCode: req.body.qrCode
      }
      await bookingService.unbookSlot(reqBody);
      res.status(200).json({
        message: 'Booking slot unbooked successfully!',
        success: true,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message, success: false });
    }
  }
}
