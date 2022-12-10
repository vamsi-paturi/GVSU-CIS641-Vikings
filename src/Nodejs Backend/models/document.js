const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

const docSchema = new mongoose.Schema({
  tittle: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    trim: true,
  },

  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  description: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    trim: true,
  },

  isActive: {
    type: Boolean,
    default: true,
  },
  createdDate: { type: Date, default: Date.now },
});

const document = mongoose.model("Documents", docSchema);

function validateDoc(doc) {
  const schema = {
    tittle: Joi.string().min(5).max(255).required(),
    userid: Joi.objectId().required(),
    path: Joi.string().min(5).max(255).required(),
    description: Joi.string().required(),
  };
  return Joi.validate(doc, schema);
}

exports.Document = document;
exports.Validate = validateDoc;
