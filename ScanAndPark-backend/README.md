# SCAN&PARK-BACKEND
## Description
- Restfull API service to manage parkings by ADMINS.
- ADMIN can create parking slot along with a unique QR barcode.
- User can create account and login to the system.
- User can see free slots.
- User can book/unbook slot by.

## Installtaion
- clone the repository with ssh key `git@gitlab.rz.uni-bamberg.de:mobi/teaching/sose21/sose21-smart-city-parking-group3.git`
- navigate to folder ScanAndPark-backend ***cd ScanAndPark-backend***
- setup project dependency ***npm install***
- create folder assets ***mkdir assets*** then ***cd assets*** then ***mkdir images*** then ***cd ...*** and ***cd ...*** to come back to project backend directory.
- create .env file ***touch .env***
- setup mysql; create database ***scanandpark*** db-user ***root*** db-password ***root*** host
- setup sequelize-cli globally ***sudo npm i -g sequelize-cli***
- for migration and seeding databse run ***npm run migrate-db***
- for reverting migration and seeding run ***npm run revert-db***
- server will be running on ***localhost:5000***   