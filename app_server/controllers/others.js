// app_server/controllers/others.js
exports.about = (req, res) => {
  res.render('about', {
      title: 'About Us',
      reviews: [
          { review: "Great experience!" },
          { review: "Loved the food and service!" },
          { review: "A wonderful dining place!" }
      ]
  });
};
