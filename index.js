
//cube
require('dotenv').config();
const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-parser');
const CubejsServerCore = require('@cubejs-backend/server-core');
const cors = require('cors')


const app = express();
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));

const serverCore = CubejsServerCore.create();
serverCore.initApp(app);


app.get('/auth/cubejs-token', (req, res) => {
  res.json({
    token: jwt.sign({ u: req.user }, process.env.CUBEJS_API_SECRET, { expiresIn: '30d' })
  })
})


const port = process.env.PORT || 4000;
app.listen(port, (err) => {
  if (err) {
    console.error('Fatal error during server start: ');
    console.error(e.stack || e);
  }
  console.log(`🚀 Cube.js server is listening on ${port}`);
});
