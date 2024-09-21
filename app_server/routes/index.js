const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main');
const locationsController = require('../controllers/locations');
const othersController = require('../controllers/others');
const reservationController = require('../controllers/reservation');

router.get('/', mainController.home);
router.get('/menu', locationsController.menu);
router.get('/about', othersController.about);
router.get('/reservation', reservationController.showReservationPage);
router.post('/reservation', reservationController.makeReservation);
router.get('/reservation/success', (req, res) => res.send('Reservation successful!'));
router.get('/reservations', reservationController.listReservations);

module.exports = router;