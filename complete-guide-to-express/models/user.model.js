const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

// creating schema

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Name"],
      maxlength: 50,
      minlength: 3,
    },

    email: {
      type: String,
      required: [true, "Please Enter Email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Please Enter the password"],
      minlength: 6,
    }
  },
  { timestamps: true }
);


UserSchema.pre("save", async function () {

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

// creating models & exporting

module.exports = mongoose.model("User", UserSchema);