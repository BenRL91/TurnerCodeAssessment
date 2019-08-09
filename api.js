const DB = require('mongodb').MongoClient;
const url = 'mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge'

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/titles', (req, res) => {
  let cursor;
  DB.connect(url, (err, client) => {
    console.log("Mongo Connected");
    db = client.db('dev-challenge');

    cursor = db.collection('Titles').find().forEach(title => {
      console.log(title.TitleName, title._id);
    })
    client.close();
  })
  res.send(cursor);
});

app.listen(port, () => {
  console.log(`listening on port ${ port }`);
});
