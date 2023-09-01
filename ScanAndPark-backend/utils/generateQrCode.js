import QRCode from 'qrcode';
import path from 'path';

export default async (parkingId,text) => {
  try {
    await QRCode.toFile(path.join(__dirname, `../assets/images/parking-${parkingId}.${process.env.IMG_EXT}`), text);
  } catch (err) {
    return err;
  }
}