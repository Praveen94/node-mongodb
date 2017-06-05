const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
if(err)
return console.log('Unable to connect to database');

console.log('Connected to database successfully');



db.collection('Users').find({name:'Praveen'}).toArray().then(function(docs){
  console.log(JSON.stringify(docs,undefined,2));
},function(err){
console.log('Unable to fetch ',err);
});




// db.close();
});
