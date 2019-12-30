require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session      = require("express-session");
const cors         = require("cors"); 

// enables database connection
require("./configs/database/db.setup");

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

// app.use(require('node-sass-middleware')({
//   src:  path.join(__dirname, 'public'),
//   dest: path.join(__dirname, 'public'),
//   sourceMap: true
// }));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// use CORS to allow access to this API from the frontend application
// CORS -> Cross-Origin Resource Sharing

let origins = ["http://localhost:3000", "http://minacre8s.herokuapp.com"]
let corsOptions = {
  origin: function (origin, callback) {
    if (origins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));
// app.use(cors({
//   credentials: true,
//   // this is the port where our react app is running
//   // array of domains we accept the cookies from
//   origin: ["http://localhost:3000", "http://minacre8s.herokuapp.com"]
// }))


// SESSION:
app.use(session({
  secret: "my-amazing-secret-blah",
  resave: true,
  saveUninitialized: true // don't save any sessions that doesn't have any data in them
}));

// 🚨🚨🚨 must come after the sessions 🚨🚨🚨
require("./configs/passport/passport.setup")(app);




// default value for title local
app.locals.title = 'Ecommerce-Server';

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const index = require('./routes/index');
app.use('/', index);

const authRoutes = require("./routes/auth.routes");
app.use("/", authRoutes);

const categoryRoutes = require("./routes/category.routes");
app.use("/", categoryRoutes)

const productRoutes = require("./routes/product.routes");
app.use("/", productRoutes)

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});


module.exports = app;
