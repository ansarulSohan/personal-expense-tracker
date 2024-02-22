const errors = (err, req, res, next) => {
  console.log(err);
  res.status(err.status).send(err.msg);
};

module.exports = errors;
