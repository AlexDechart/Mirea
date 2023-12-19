const express = require("express");
const bodyParser = require('body-parser');

const app = express();

let users = [
  {
    email: 'example1@mail.com',
    password: 'password1'
  },
];

app.use(express.static(__dirname + "/Front/img"));
app.use(express.static(__dirname + "/Front"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.use((_, response) => {
    response.status(404).sendFile(__dirname + "/Front/error404.html");
  });

app.get("/", function(request, response){
    response.sendFile(__dirname + "/Front/index.html");
});

app.post('/script', function(req, res) {
  const existingUser = users.find(u => u.email === req.body.email);
  response.sendFile(__dirname + "/Front/index.html");
// Если такой пользователь уже существует, возвращаем ошибку
  if(existingUser) {
  res.status(400).send({ error: 'Пользователь с таким email уже существует.' });
  return;
  
}
// Если все в порядке, добавляем пользователя в "базу данных"
  users.push({ email: req.body.email, password: req.body.password });
  res.send({ success: 'Пользователь успешно зарегистрирован!' });
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

app.get("/account_1.html", function(_, response){
  response.sendFile(__dirname + "/Front/account_1.html");
});

app.listen(2890, function(){console.log("Server started at: http://localhost:2890")});
