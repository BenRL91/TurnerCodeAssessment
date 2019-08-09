const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge'

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

async function dbQuery(resource) {
    const db = await MongoClient.connect(url);
    const dbo = db.db("dev-challenge");
    const result = await dbo.collection(resource).find().toArray()
    return result;
}


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/titles', (req, res) => {
  getResource('Titles', res);
});

async function getResource(resource, res) {
   await MongoClient.connect(url, (err, client) => {
     console.log("Mongo Connected");
     db = client.db('dev-challenge');
   })
   try {
        const results = await dbQuery(resource);
        console.log(results);
        res.json(results.);
    } catch (error) {
        console.log(error);
    }
    console.log("Done!");
}

app.listen(port, () => {
  console.log(`listening on port ${ port }`);
});
