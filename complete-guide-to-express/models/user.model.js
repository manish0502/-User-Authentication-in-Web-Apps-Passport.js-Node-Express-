const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating schema

const UserSchema = new Schema(
  {
    username: {
      type: String
    },

    hash: {
      type: String
    },

    salt: {
      type: String,
    }
  },
  { timestamps: true }
);

// creating models & exporting

module.exports = mongoose.model("User", UserSchema);