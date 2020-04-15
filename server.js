// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "public/reserve.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "public/tables.html"));
});

app.get("/api/tables", function(req, res) {
  res.json(reservationData); 
})

app.get("/api/waitlist", function(req, res) {
  res.json(waitData); 
})

var reservationData = [{
  customerName: "yoda",
  phoneNumber: "Yoda",
  customerEmail: "Jedi Master",
  customerID: "ID"
}];

var waitData = [{
  customerName: "blah",
  phoneNumber: "bloop",
  customerEmail: "Jedi Master",
  customerID: "182"
}];

app.post("/api/tables", function(req, res) {
  console.log(req.body); 
  if(reservationData.length < 2) {
    reservationData.push(req.body); 
    console.log("reservation data here:" + reservationData); 
  }
  else {
    waitData.push(req.body); 
    console.log("wait data here:" + waitData); 
  }

}); 

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
