module.exports = (req, res, next) => {
    if (req.session && req.session.user && req.session.user.nombre!="") {
      res.locals.user = req.session.user;
  
    } else {
      if (req.cookies.user) {
        res.locals.user = req.cookies.user;
  
      }
    }
    next();
  };