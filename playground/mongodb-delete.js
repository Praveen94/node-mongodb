const MongoClient=require('mongodb').MongoClient;
var ObjectID=require('mongodb').ObjectID;


MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
if(err)
return console.log('Unable to connect to database');

console.log('Connected to database successfully');



// db.collection('Users').deleteMany({name:'Praveen'}).then(function(result){
//
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({_id:new ObjectID('5934c5aeb23e7b2388d78dbe')});

// db.close();
});
