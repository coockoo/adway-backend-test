const express = require('express');

const config = require('./config');
const { ValidationError } = require('./errors');

const handleCreate = require('./handle-create');
const handleDelete = require('./handle-delete');

const app = express();

app.post('/create', handleCreate);
app.delete('/delete', handleDelete);

app.use((req, res) => {
  res.status(404).end();
});

app.use((error, req, res, next_) => {
  if (error instanceof ValidationError) {
    res.status(400).json({ error: error.message });
    return;
  }
  console.error('Internal server error');
  console.error(error);
  res.status(500).end();
});

app.listen(config.port, () => {
  console.log(`App is listening on port ${config.port}`);
});
