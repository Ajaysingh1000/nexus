const express = require("express");
const authRouter = express.Router();
const {
  login,
  register,
  logout,
  getProfile,
  adminRegister
} = require("../controller/userAuth");
const userMiddleware = require("../middleware/userMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

// Register
authRouter.post("/user/register", register);
authRouter.post("/user/login", login);
authRouter.post("/user/logout", userMiddleware, logout);
authRouter.get("getProfile", getProfile);
authRouter.post("/admin/register",adminMiddleware, adminRegister);

module.exports = authRouter;
