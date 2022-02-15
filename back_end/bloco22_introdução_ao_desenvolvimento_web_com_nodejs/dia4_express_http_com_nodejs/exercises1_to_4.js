const express = require('express');
const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
  return res.status(200).json({"message": "pong"})
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({"message": `Hello, ${name}`});
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if(age <= 17) return res.status(401).json({"message": "Unauthorized"});
  return res.status(200).json({"message": `Hello, ${name}`});
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).json({"message": `Seu nome é ${name} e você tem ${age} anos de idade`});
});

app.listen(3000, () => {
  console.log('App ouvindo na porta 3000')
});