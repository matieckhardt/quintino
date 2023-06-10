require("dotenv").config();
require("./database");
const config = require("./config");
const express = require("express");
const CORS = require("cors");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");

app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs.engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partials: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    defaultLayout: "main",
  })
);
app.set("view engine", ".hbs");

// Settings
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/views")));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/fonts")));
app.use(express.static(path.join(__dirname, "public/images")));
app.use(express.static(path.join(__dirname, "public/scripts")));
app.use(express.static(path.join(__dirname, "public/slick")));
app.use(CORS());
console.log(CORS());

// Routes
app.use(require("./routes/routes"));

// Init
app.listen(process.env.PORT || 3000);
