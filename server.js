const express = require("express");

// Connecting to database
require("./config/dbConnect");

const app = express();

// using json format
app.use(express.json());

app.use("/cars", require("./router/CarsRouter"));

app.listen(4000, () => console.log("Server Is Up And Running"));
