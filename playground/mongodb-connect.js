const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
if(err)
return console.log('Unable to connect to database');

console.log('Connected to database successfully');


// db.collection('Todo').insertOne({
//
// text:'Something to do',
// completed:false
//
// },function(err,result){
// if(err)
// {
//   return console.log('Unable to insert todo ',err);
// }
//
// console.log(JSON.stringify(result.ops,undefined,2));
//
// });

db.collection('Users').insertOne({

name:'Praveen',
age:23,
location:'India'

},function(err,result){
if(err)
return console.log('Unable to insert into Users ',err);
console.log(JSON.stringify(result.ops,undefined,2));

});





db.close();
});
