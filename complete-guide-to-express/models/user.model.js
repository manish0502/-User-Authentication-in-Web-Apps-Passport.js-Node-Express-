const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating schema

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

// creating models & exporting

module.exports = mongoose.model("User", UserSchema);