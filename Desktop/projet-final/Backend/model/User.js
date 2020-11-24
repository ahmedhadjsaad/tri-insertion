const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  familyName: String,
  email: String,
  password : String
  
});

module.exports = Users = mongoose.model('Users', UserSchema);
