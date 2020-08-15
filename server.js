'use strict'
const cors = require('cors');
const authRoutes = require('./auth/auth.routes');
const express = require('express');
const base = require('./configuracion/dase');
const PORT = 3030;
// init DB

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());

app.use('/api', router);

authRoutes(router);
router.get('/', (req, res) => {
  res.send('Hello from home');
});
app.use(router);
app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
