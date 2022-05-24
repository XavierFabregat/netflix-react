const Express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router.js');


const app = Express();
const PORT = 5050;
const host = 'localhost';

app.use(Express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening in on http://${host}:${PORT} ...` )
})