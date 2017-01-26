var express = require( 'express' );
var path = require( 'path' );
var user = require('./models/user');

var logger = require( 'morgan' );
var bodyParser = require( 'body-parser' );
var app = express();

app.use( logger( 'dev' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );

// Mongoose stuff
var mongoose = require( 'mongoose' );
mongoose.connect( 'mongodb://localhost/family-tree' );

var bob = new user( {
  firstName: 'Bob',
  email: 'bob@ga.co',
  meta:{
    age: 27
  }
});

//bob.sayHello();

// bob.save( function (err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log('User Created');
//   }
// });

var gary = new user( {
  firstName: 'Gary',
  email: 'gary@gmail.com',
  password: 'password',
});

// save the user
// gary.save( function( err ) {
//     if ( err ) {
//         console.log( err );
//     } else {
//         console.log( 'User Created!' );
//     }
// });

user.findByIdAndUpdate('588a5a6250a43a2d8a0eb9fb', {firstName: 'Adam'}, function( err, result ) {
    if ( err ) {
        console.log( err );
    } else {
        console.log('original', result );
    }
});

user.findById('588a5a6250a43a2d8a0eb9fb', function( err, result ) {
    if ( err ) {
        console.log( err );
    } else {
        console.log( result );
    }
});
