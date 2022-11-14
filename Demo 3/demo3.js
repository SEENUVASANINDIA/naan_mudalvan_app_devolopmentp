let str = '100% Genuine @ discount of $20';
document.getElementById("demostr").innerHTML = 'String : ' + str;

//Word characters pattern
var pattern1 = /\w/g;
var word = str.match(pattern1);
document.getElementById("demo").innerHTML = 'Word characters : ' + word;

//Non-word characters pattern
var pattern2 = /\W/g;
var non_word = str.match(pattern2);
document.getElementById("demo1").innerHTML = 'Non-word characters : ' + non_word;

//Digits pattern
var pattern3 = /\d/g;
var digit = str.match(pattern3);
document.getElementById("demo2").innerHTML = 'Digits : ' + digit;

//Non-digits character pattern
var pattern4 = /\D/g;
var non_digit = str.match(pattern4);
document.getElementById("demo3").innerHTML = 'Non-digits : ' + non_digit;

//White space character pattern
var pattern5 = /\s/g;
var space = str.match(pattern5);
document.getElementById("demo4").innerHTML = 'Space characters : ' + space;

//Non-white space character pattern
var pattern6 = /\S/g;
var non_space = str.match(pattern6);
document.getElementById("demo5").innerHTML = 'Non-space characters : ' + non_space;

//Begin/End pattern
var pattern7 = /\bd/;
var begin_start = str.match(pattern7);
document.getElementById("demo6").innerHTML = 'Word beginning/ending with : ' + begin_start;