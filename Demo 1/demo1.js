let str = 'This is my first program on regex and it is simple one';
let pattern = /is/g;

var result = str.match(pattern);
document.getElementById("demo").innerHTML = result;

let str2 = 'Edureka welcomes you to the regex course';
let pattern2 = /edureka/i;
var result2 = str2.match(pattern2);
document.getElementById("demo1").innerHTML = result2;

var str3 = "\nThis is car \nThat is dog";
var pattern3 = /dog/m;
var result3 = str3.match(pattern3);
document.getElementById("demo2").innerHTML = result3;