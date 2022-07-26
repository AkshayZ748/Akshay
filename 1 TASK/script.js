var json = [{
    "NAME" : "AKSHAY", 
    "Mobile NO"   : "9874561230",
    "WORK" : "FARMER",
    "MAIL": "AKKI@gmail.com"
},
{
    "NAME" : "AKSHAY", 
    "Mobile NO"   : "9874561230",
    "WORK" : "FARMER",
    "MAIL": "AKKI@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.NAME);
    console.log(obj["Mobile NO"]);
    console.log(obj.WORK);
    console.log(obj.MAIL);

}
//for Each
json.forEach(function(obj) { console.log(obj["Mobile NO"]); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].NAME);
  //console.log(json[key].mobile no);
 
}
}
//for Of
let text = "";
for (let x of json[key].NAME) {
 text += x; 
}
 console.log(text);
