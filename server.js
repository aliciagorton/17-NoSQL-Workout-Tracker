const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express ();

app.use(logger("dev"));
app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect(process.env.MONGDB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
});


// routes
app.use(require("./routes/htmlRoutes"));
//app.use(require("./routes/apiRoutes"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });



