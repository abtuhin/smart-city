import parkingService from '../services/parking.service';

export default {
  getParkings: async (req, res) => {
    try {
      const parkings = await parkingService.getParkings(req.query.status);
      res.status(200).json({
        data: parkings,
        message: 'Parkings fetched successfully!',
        success: true,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message, success: false });
    }
  },
  createParking: async (req, res) => {
    try {
      const parking = await parkingService.createParking(req.body);
      res.status(200).json({
        data: parking,
        message: 'Parking created successfully!',
        success: true,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message, success: false });
    }
  },
  deleteParking: async (req, res) => {
    try {
      await parkingService.deleteParking(req.params.parkingId);
      res.status(200).json({
        message: 'Parking deleted successfully!',
        success: true,
      }); 
    } catch (error) {
      return res.status(400).json({ message: error.message, success: false });
    }
  }
}
