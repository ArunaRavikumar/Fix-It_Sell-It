
// File Name: index.js

exports.home = function(req, res, next) {
    console.log('===> Original URL: ' + req.session.url);
    res.render('index', { 
        title: 'Sell-It',
        userName: req.user ? req.user.username : ''
    });
};