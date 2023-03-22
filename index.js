const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/database.js');
const Auth = require('./routes/auth.js');

dotenv.config();

const app = express();
app.use(cors());

// Middlewares
app.use(express.json());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

// Router Register
app.use('/',Auth);

app.get('/', (req, res) => {
  res.json({ message: 'deneme deneme' });
});

const port = process.env.PORT;

db();

app.listen(port, () => {
  console.log(`Application running on port: ${port}`);
});
