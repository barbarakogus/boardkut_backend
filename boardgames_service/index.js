const express = require('express');
const repository = require('./data/repository');
var cors = require('cors')

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());

app.get('/api/boardgames', async (req, res) => {
  console.log('entrei no get all');
  const boardgames = await repository.getAllBoardgames();
  res
    .json(boardgames)
    .status(200)
});

app.get('/api/boardgames/:id', async (req, res) => {
  console.log('entrei no get by id');
  const boardgame = await repository.getBoardgameById(req.params.id);
  res
    .json(boardgame)
    .status(200)
});

app.post('/api/boardgames', async (req, res) => {
  console.log('entrei no post');
  const newBoardgame = await repository.addBoardgame(req.body);
  res.set('Location', `/api/boardgames/${newBoardgame.id}`);
  res.set('Access-Control-Expose-Headers', '*');
  res.status(201);
  res.json(newBoardgame);
});

app.put('/api/boardgames/:id', async (req, res) => {
  console.log('entrei no put');
  await repository.updateBoardgame(req.body, req.params.id);
  res.status(200);
  res.end()
});

app.delete('/api/boardgames/:id', async (req, res) => {
  console.log('entrei no delete');
  await repository.deleteBoardgame(req.params.id);
  res.status(204);
  res.end()
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

module.exports.app = app;
