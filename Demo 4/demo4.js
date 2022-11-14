let str = 'Hello, welcome to edureka! 1 12 123';
document.getElementById("demostr").innerHTML = 'String : ' + str;

//Atlest one pattern
var pattern1 = /e+/g;
var atleast_one = str.match(pattern1);
document.getElementById("demo").innerHTML = 'Atleast one "e" pattern : ' + atleast_one;

//Zero or more pattern
var pattern2 = /el*/g;
var zero_more = str.match(pattern2);
document.getElementById("demo1").innerHTML = 'Zero or more "e" pattern : ' + zero_more;

//Zero or one pattern
var pattern3 = /e?/g;
var zero_one = str.match(pattern3);
document.getElementById("demo2").innerHTML = 'Zero or one "e" pattern : ' + zero_one;

//Sequence of X pattern
var pattern4 = /l{2}/g;
var seq_x = str.match(pattern4);
document.getElementById("demo3").innerHTML = 'Sequence of X "l"s : ' + seq_x;

//Sequence of X to Y pattern
var pattern5 = /\l{1,2}/g;
var seq_xy = str.match(pattern5);
document.getElementById("demo4").innerHTML = 'Sequence of X to Y "l"s : ' + seq_xy;

//Sequence of at least X pattern
var pattern6 = /l{1,}/g;
var atleast_x = str.match(pattern6);
document.getElementById("demo5").innerHTML = 'Sequence of at least X "l"s : ' + atleast_x;

//End with pattern
var pattern7 = /3$/g;
var end_with = str.match(pattern7);
document.getElementById("demo6").innerHTML = 'End with 3 : ' + end_with;