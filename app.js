// External imports //
var express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Internal imports //
const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");
const adminRoute = require("./routes/adminRoute");
const tryRoute = require("./routes/tryRoute");

const {
  NotFoundHanlder,
  ErrorHanlder,
} = require("./middlewares/errorHandlingMiddleware");

dotenv.config({ path: `.env.${process.env.NODE_ENV || "production"}` });

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // For devlopment purpose //
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// Routes //
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/admin", adminRoute);
app.use("/api/try", tryRoute);

// Catch 404 and forward to NotFoundHanlder //
app.use(NotFoundHanlder);

// Error handler
app.use(ErrorHanlder);

module.exports = app;
