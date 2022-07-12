const Express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router.js');
require('dotenv').config('./.env')


const app = Express();
const PORT = process.env.PORT;
const host = process.env.HOST;

app.use(Express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening in on http://${host}:${PORT} ...` )
})