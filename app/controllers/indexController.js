exports.getHomePage = (req, res) => {
    res.render('index', { message: 'Hello World!' });
  };  