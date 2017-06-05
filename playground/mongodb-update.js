const MongoClient=require('mongodb').MongoClient;
var ObjectID=require('mongodb').ObjectID;


MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
if(err)
return console.log('Unable to connect to database');

console.log('Connected to database successfully');

db.collection('Users').findOneAndUpdate({
_id:new ObjectID("5934c5935325a823658610ee")
},{
$inc:
{
age:+1
}
},
{
  returnOriginal:false
}).then(function(response){
console.log(response);
});


// db.close();
});
