//app.js

const express = require("express");
const jwt = require("jsonwebtoken");
// const { sequelize } = require("../models/index");
const app = express();
const cors = require("cors");

// sequelize.sync();
require("dotenv").config();
const userRouter = require("./api/users/user_router");

app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.listen(process.env.APP_PORT, () => {
  console.log("PORT Check");
});
