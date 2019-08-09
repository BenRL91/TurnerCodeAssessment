const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge'

MongoClient.connect(url, function(err, db){
  console.log("Connected");
  db.close();
});
