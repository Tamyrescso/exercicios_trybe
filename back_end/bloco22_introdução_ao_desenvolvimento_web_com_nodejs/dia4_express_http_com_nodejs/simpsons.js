const getSimpsons = require('./simpson_helper');
const fs = require('fs').promises;

console.log(getSimpsons)
const express = require('express');
const app = express();

app.use(express.json());

app.get('/simpsons', async (req, res) => {
  try{
    const getData = await getSimpsons();
    return res.status(200).send(getData);
  } catch {
    return res.status(500);
  }
})

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  try{
    const simpsons = await getSimpsons();
    const findSimpson = simpsons.filter((s) => s.id === id);
    if(!findSimpson.length) return res.status(404).json({message: 'simpson not found'});
    return res.status(200).send(findSimpson);
  } catch {
    return res.status(500);
  }
})

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  try{
    const simpsons = await getSimpsons();
    const findSimpson = simpsons.filter((s) => s.id === id);
    if(findSimpson.length) return res.status(409).json({message: 'id already exists'});
    simpsons.push({id, name})
    fs.writeFile('./simpsons.json', JSON.stringify(simpsons))
    return res.status(204).end();
  } catch {
    return res.status(500);
  }
})

app.listen(3001, () => {
  console.log('App ouvindo na porta 3001')
});