// app_server/controllers/main.js
const home = (req, res) => {
    res.render('index', { title: 'Home' });
};

module.exports = {
    home
};
