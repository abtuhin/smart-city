# SCAN&PARK-BACKEND
## Description
- Restfull API service to manage parkings by ADMINS.
- User can create account and login to the system.
- User can see free slots.
- User can book/unbook slot.

## Installtaion
- clone the repository with ssh key `git@gitlab.rz.uni-bamberg.de:mobi/teaching/sose21/sose21-smart-city-parking-group3.git`
- navigate to folder ScanAndPark-backend `cd ScanAndPark-backend`
- setup project dependency `npm install`
- setup mysql; create database `scanandpark` db-user `root` db-password `root` host `localhost`
- setup sequelize-cli globally `sudo npm i -g sequelize-cli`
- run sequelize `db:migrate` to create database tables
- server will be running on `localhost:5000`   