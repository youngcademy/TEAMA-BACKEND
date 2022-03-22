//user_router.js

const {
  createUser,
  getUserByUserID,
  getUsers,
  updateUser,
  login,
} = require("./user_controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createUser);
router.get("/", checkToken, getUsers);
router.get("/:id", checkToken, getUserByUserID);
router.patch("/", checkToken, updateUser);
router.post("/login", login);

module.exports = router;
