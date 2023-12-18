const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let users = [
  {
    email: 'example1@mail.com',
    password: 'password1'
  },
];

app.use(express.static(__dirname + "/Front/img"));
app.use(express.static(__dirname + "/Front"));

app.use((_, response) => {
    response.status(404).sendFile(__dirname + "/Front/error404.html");
  });

app.post("/reg.html", (req, res) => {
    // Проверяем, существует ли пользователь с таким электронной почтой
    const existingUser = users.find(u => u.email === req.body.email);
  
    // Если такой пользователь уже существует, возвращаем ошибку
    if(existingUser) {
      res.status(400).send({ error: 'Пользователь с таким email уже существует.' });
      return;
    }
  
    // Если все в порядке, добавляем пользователя в "базу данных"
    users.push({ email: req.body.email, password: req.body.password });
    res.redirect("/");
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

app.get("/aboutus.html", function(_, response){
  response.sendFile(__dirname + "/Front/aboutus.html");
});

app.listen(2890, function(){console.log("Server started at: http://localhost:2890")});
