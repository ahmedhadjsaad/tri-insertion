const express = require("express");
const { register, login } = require("../controllers/user.controller");
const { registerRules, validator  } = require("../middlweware/validator");
const User = require('../model/User')

const Router = express.Router();

Router.post(`/`,registerRules() , validator,register)
Router.post(`/Login`,login)
module.exports = Router;

