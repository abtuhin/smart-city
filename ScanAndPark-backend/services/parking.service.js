import Models from '../models';
import Util from '../utils';
import fs from "fs";
import path from "path"

export default {
  getParkings: async (status) => {
    try {
      if(!status) return await Models.Parking.findAll();
      else return await Models.Parking.findAll({ where: { status }});
    } catch (error) {
      throw new Error(error);
    }
  },
  createParking: async (payload) => {
    try {
      const parking =  await Models.Parking.create(payload);
      await Util.generateQrCode(parking.id, parking.qrCode);
      await Models.QrCode.create({ parkingId: parking.id, type: 'image/png', name: `parking-${parking.id}`, data: fs.readFileSync(path.join(__dirname, `../assets/images/parking-${parking.id}.${process.env.IMG_EXT}`))})
      return parking;
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteParking: async (parkingId) => {
    try {
      return await Models.Parking.destroy({ where : { id: parkingId }});
    } catch (error) {
      throw new Error("SERVICE::: " + error);
    }
  }
}