const authRoute = require("express").Router();

const registerCheck = (req, res, next) => {
  let success = true;
  const userDetail = {
    _uId: 1001,
    name: "Pradip",
    address: "Sitapaila",
    login: 1,
  };

  if (success) {
    req.authCheck = userDetail;

    next();
  } else {
    res.status(401).json({
      result: null,
      message: "Register Failed",
      meta: null,
    });
  }
};

const loginCheck = (req, res, next) => {
  const authCheck = req.authCheck;

  if (authCheck.login == 1) {
    next();
  } else {
    res.status(401).json({
      message: "Not login",
    });
  }
};

const profile = (req, res, next) => {
  const authCheck = req.authCheck;
  res.json({
    message: `Hello ${authCheck.name}, Welcome in your Profile`,
  });
};

authRoute.get("/profile", registerCheck, loginCheck, profile);

module.exports = authRoute;
