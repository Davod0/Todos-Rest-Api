module.exports = (req, res, next) => {
  //   const auth = req.query("auth");
  const auth = req.query.auth;
  if (auth === "yes") next();
  else {
    res.status(403).json({
      msg: "You are not authenticated",
    });
  }
};
