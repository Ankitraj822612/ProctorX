const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create new schema for website user (professor or student)
// userType is true if professor else false
const UserSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    userType: {
      type: Boolean,
      required: false // Default is not required, can be true or false
    }
});

// export the model
module.exports = mongoose.model("users", UserSchema);
