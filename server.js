var express = require("express");
var path = require("path");

var app = express ();
var PORT = 1313

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var friends = {
  name: "",
  photo: "",
  scores: [""]
}

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
  });
  
  

app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
  
    
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newFriend);
  
    characters.push(newFriend);
  
    res.json(newFriend);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
  
  