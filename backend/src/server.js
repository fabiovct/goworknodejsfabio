const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();  
const db_connection = require('./db_connection');

console.log('API funcionando!');

app.db_connection = db_connection;

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);