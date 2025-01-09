const mongoose = require("mongoose");
var jwt = require("jsonwebtoken");
require("dotenv").config();


const userschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userschema.methods.generateToken = function () {
  try {
    return jwt.sign({
        userId: this._id.toString(),
        email : this.email
    },
    process.env.SCRETE_KEY_JWT
     
    );
  } catch (error) {
    console.log("jwt token",error)
  }
};

const usermodel = mongoose.model("User", userschema);

exports.usermodel = usermodel;
