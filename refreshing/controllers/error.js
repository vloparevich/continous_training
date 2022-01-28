exports.get404 = (req, res, next) => {
  res
    .status(404)
    .render('../views/errors/404.ejs', {
      pageTitle: 'Page Not Found!',
      path: '/',
    });
};
