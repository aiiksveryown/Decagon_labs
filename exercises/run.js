var json_list = {}; // Create an object as JSON root

var user = 'foo'; // Create an 'user' variable and assign it 'foo' as property name
json_list[user] = {}; // Creates new 'foo' property as object

json_list[user].alert = {}; // Creates an 'alert' property as object in 'foo' property
json_list[user].alert.time = 30; // You can assign a value using a variable ...
json_list.foo.alert.type = 'sec'; // ... or directly with the property name

user = 'bar'; // Use the same 'user' variable but assign it a new 'bar' value
json_list[user] = {}; // Creates new 'bar' property as object

var objAlert = { 'type': 'sec', 'time': 60 }; // Create an 'alert' objet filled with properties
json_list[user].alert = objAlert; // Assign an 'alert' property as object from 'objAlert' variable
json_list[user].alert.type = 'min'; // You can change his value using a variable... 
json_list.bar.alert.time = 80; // ... or directly with the property name

// Convert JSON object to string
var jsonstr = JSON.stringify(json_list);
console.log(jsonstr)