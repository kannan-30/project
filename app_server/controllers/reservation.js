const Reservation = require('../models/reservation');

exports.showReservationPage = (req, res) => {
  res.render('reservation', { title: 'Make a Reservation' });
};

exports.makeReservation = (req, res) => {
  const { name, email, phone, date, time, guests } = req.body;
  const reservation = new Reservation({ name, email, phone, date, time, guests });

  reservation.save()
    .then(() => res.redirect('/reservation/success'))
    .catch((err) => res.status(500).send('Error making reservation.'));
};

exports.listReservations = (req, res) => {
  Reservation.find({}, (err, reservations) => {
    if (err) {
      res.status(500).send('Error retrieving reservations.');
    } else {
      res.render('reservation-list', { title: 'List of Reservations', reservations });
    }
  });
};