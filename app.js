const path = require("path");
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

// const db = require("./util/database")
const sequelize = require("./utils/database");
const {
  postUserDetail,
  getUserDetails,
  updateDetail,
} = require("./controllers/user");

const app = express();
var cors = require("cors");

app.use(cors());

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "public")));

// app.use(errorController.get404);
app.post("/save-user", postUserDetail);
app.get("/home", getUserDetails);
app.post("/update", updateDetail);

sequelize
  .sync()
  .then((res) => {})
  .catch((err) => {
    console.log("err", err);
  });
app.listen(3000);
