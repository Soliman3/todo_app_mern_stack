//setup express server

const express = require('express');
const cors = require('cors');
const connection = require('./db');
const app = express();
const tasks = require('./routes/taskRoutes');


app.use(express.json());
app.use(cors());
connection();
app.use('/api/tasks', tasks)

const port = process.env.PORT || 8080;
app.listen(port, ()=>{`server listening on port ${port}` })