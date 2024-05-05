const mangoose = require("mongoose");

const UserSchema = new mangoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mangoose.model("User", UserSchema);

module.exports = User;
