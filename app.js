const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.static(__dirname + "/Front/img"));
app.use(express.static(__dirname + "/Front"));

app.use("/main",function (_, response) {
    response.redirect("/")
  });

app.use((_, response) => {
    response.status(404).sendFile(__dirname + "/Front/error404.html");
  });

app.get("/", function(request, response){
    response.sendFile(__dirname + "/Front/index.html");
});

app.get("/reg.html", function(request, response){
    response.sendFile(__dirname + "/Front/reg.html");
});

app.get("/lk.html", function(request, response){
    response.sendFile(__dirname + "/Front/lk.html");
});

app.listen(2890, function(){console.log("Server started at: http://localhost:2890")});
