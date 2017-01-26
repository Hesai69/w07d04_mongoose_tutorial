var mongoose = require('mongoose');

// create a schema
var UserSchema = new mongoose.Schema( {
  firstName: String,
  lastName: String,
  email: { type: String, required: false, unique: false },
  meta: {
    age: Number,
    website: String,
    address: String,
    country: String,
  },
  createdAt: Date,
  updatedAt: Date
});

UserSchema.methods.sayHello = function() {
  console.log( "Hi " + this.firstName );
};

var user = mongoose.model('User', UserSchema);

// make this available to our other files
module.exports = user;
