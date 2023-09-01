'use strict'

require("dotenv").config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import "./db-connection"; // this should be always before accessing models
// import auth from "./middlewares/auth";
import UserRoutes from './routes/user.route';
import RoleRoutes from './routes/role.route';
import ParkingRoutes from './routes/parking.route';
import BookingRoutes from './routes/booking.route';

const app = express();
const PORT = 3000;

const corsOptions = {
  origin: "http://localhost:" + PORT
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.use('/users', UserRoutes);
app.use('/roles', RoleRoutes);
app.use('/parkings', ParkingRoutes);
app.use('/bookings', BookingRoutes);

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});