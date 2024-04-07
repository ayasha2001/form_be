const { where } = require("sequelize");
const User = require("../models/user");

exports.postUserDetail = (req, res) => {
  console.log(req.body.name, req.body);
  User.create({
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
    time: req.body.time,
  })
    .then((res) => {
      console.log("user succesfully saved");
      res.json(res)
    })
    .catch((err) => {
      console.log("user not saved");
    });
};

exports.getUserDetails = (req, res) => {
  User.findAll()
    .then((users) => {
      console.log(users);
      res.json(users);
    })
    .catch((err) => {
      console.log("user not saved");
    });
};

exports.updateDetail = (req, res) => {
  const email = req.body.email;
  console.log(req.body,"email")

  User.destroy({ where: { email: email } })
    .then((numDeletedRows) => {
      console.log(`Deleted ${numDeletedRows} user(s)`);
      res.sendStatus(200); // Send a success response if deletion is successful
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500); // Send a server error response if there's an error
    });
};
