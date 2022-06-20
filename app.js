var isDone = false;
console.log(isDone);
var deciaml = 6;
console.log(deciaml);
var fullName = "Bob bobbington";
var sentence = "Hello, ".concat(fullName);
console.log(sentence);
var list1 = [1, 2, 3];
console.log(list1);
console.log(typeof list1);
var list2 = [1, 2, 3];
console.log(list2);
console.log(typeof list2);
var x;
x = ['hello', 10];
x = ['hi', 20];
console.log(x);
console.log(x[0].substring(1));
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color.Red;
var c = Color.Red;
var notSure = 4;
notSure = "maybe a string";
notSure = false;
var prettySure = 4;
var list = [1, true, 'free'];
list[1] = 100;
function warnUser() {
    console.log('this is my warning message');
}
warnUser();
var unusable = undefined;
unusable = null;
var u = undefined;
var n = null;
u = null;
n = undefined;
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("something failed");
}
function infiniteLoop() {
    while (true) {
    }
}
var someValue = 'this is a string';
var strLength = someValue.length;
console.log(strLength);
var strLenght2 = someValue.length;
console.log(strLenght2);
//# sourceMappingURL=app.js.map