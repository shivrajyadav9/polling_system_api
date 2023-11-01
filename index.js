import express from 'express';
const port = 4000;
const app = express();

import db from './config/mongoose.js';


app.use(express.urlencoded({extended:true}));

import routes from './routes/index.js';
app.use('/', routes);


app.listen(port, function () {
    console.log('Server is up and running on port ', port);
})