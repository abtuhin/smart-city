import Models from '../models';

export default {
  getBookings: async (status) => {
    try {
      if(!status) return await Models.Booking.findAll();
      else return await Models.Booking.findAll({ where: { status }});
    } catch (error) {
      throw new Error(error);
    }
  },
  bookSlot: async (payload) => {
    try {
      const bookings = await Models.Booking.findAndCountAll({ where: { userId: payload.userId }, raw: true});
      
      if(bookings.count > 0 && bookings.rows.some(booking => booking.status === "RUNNING")){  
        throw new Error("You have already scanned other QR code!");
      }

      const parking = await Models.Parking.findOne({ where: { qrCode: payload.qrCode }});
      if(parking.status === "OCCUPIED") {
        throw new Error("The slot is already booked!")
      }
      await Models.Parking.update(
        { status: 'OCCUPIED' },
        { where: { qrCode: payload.qrCode } }
      );
      return await Models.Booking.create({ slotId: parking.id, userId: payload.userId, status: "RUNNING" });
    } catch (error) {
      throw new Error(error);
    }
  },
  unbookSlot: async (payload) => {
    try {
      const parking = await Models.Parking.findOne({ where: { qrCode: payload.qrCode }});
      if(parking.status === "EMPTY") {
        throw new Error("The slot is already empty!")
      }
      await Models.Parking.update(
        { status: 'EMPTY' },
        { where: { qrCode: payload.qrCode } }
      );
      await Models.Booking.update(
        { status: "FINISHED" },
        { where: { slotId: parking.id }}
      );
      return;
    } catch (error) {
      throw new Error(error);
    }
  },
}