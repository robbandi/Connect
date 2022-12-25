const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./db');
const linesRoutes = require('./routes/lines');
const textsRoutes = require('./routes/texts');
const diagramElementsRoutes = require('./routes/diagramElements');
const stampsRoutes = require('./routes/stamps');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/lines', linesRoutes);
app.use('/api/texts', textsRoutes);
app.use('/api/diagramElements', diagramElementsRoutes);
app.use('/api/stamps', stampsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});