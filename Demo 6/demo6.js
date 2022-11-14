var str = "Edureka online courses";
var method1 = new RegExp("e");
var result = method1.exec(str);
console.log(result[0])

var result1 = method1.test(str);
console.log(result1)

var result2 = method1.toString();
console.log(result2)