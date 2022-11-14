var pattern1 = new RegExp("Welcome to Edureka", "g");
var result1 = pattern1.constructor;

var str = "Hello World!";
var pattern2 = /Wor/g;
var result2 = pattern2.global;
console.log(result2)

var pattern3 = /hel/i;
var result3 = pattern3.ignoreCase;
console.log(result3)

var pattern4 = /lo/g;
pattern4.test(str)
console.log('"lo" found. Index now at: ' + pattern4.lastIndex)

var pattern5 = /hel/m;
var result5 = pattern5.multiline;
console.log(result5)