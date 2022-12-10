const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 55,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
    trim: true,
  },

  dob: {
    type: Date,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdDate: { type: Date, default: Date.now },
});
userSchema.methods.generateAuthToken = function () {
  console.log("token called...");
  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    config.get("jwtPrivateKey")
  );
  return token;
};
const User = mongoose.model("Users", userSchema);

function validateUser(user) {
  const schema = {
    name: Joi.string().min(5).max(55).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(55).required(),
    dob: Joi.date().required(),
    phoneNumber: Joi.string(),
    address: Joi.string().required(),
    isAdmin: Joi.string(),
  };
  return Joi.validate(user, schema);
}
function validateUpUser(user) {
  const schema = {
    name: Joi.string().min(5).max(55).required(),
    email: Joi.string().min(5).max(255).required().email(),
    dob: Joi.date().required(),
    phoneNumber: Joi.string(),
    address: Joi.string().required(),
    isAdmin: Joi.string(),
    //
  };
  return Joi.validate(user, schema);
}
exports.User = User;
exports.Validate = validateUser;
exports.ValidateUpdate = validateUpUser;
