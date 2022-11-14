let str = 'Edureka 9876543210';

var pattern = /[a-z]/gi;    //[abc]
var pattern1 = /[0-9]/g;      //[0-9]

var name = str.match(pattern);
var number = str.match(pattern1);
document.getElementById("demo").innerHTML = name;
document.getElementById("demo1").innerHTML = number;