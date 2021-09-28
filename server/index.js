import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';


const app = express();
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());

app.use('/students', studentRoutes);





// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://chetanpaliwal:<password>@cluster0.qbunr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const CONNECTION_URL = 'mongodb+srv://chetanpaliwal:my1id%40uk@cluster0.qbunr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () =>
    console.log('Connection is established and running on port:' + PORT)
)).catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify', false);