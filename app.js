var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var myObj = { size: 10, label: "Size 10 object" };
printLabel(myObj);
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
console.log(mySquare);
var mySquare2 = createSquare({ width: 100, opacity: 0.5 });
var mySqaure3 = createSquare({ width: 100, opacity: 0.5 });
console.log(mySquare2);
console.log(mySqaure3);
var p1 = { x: 10, y: 20 };
var a = [1, 2, 3, 4];
var ro = a;
var ro2 = a;
console.log(ro);
console.log(ro2);
a[1] = 7;
console.log(ro);
console.log(ro2);
a = ro;
console.log(a);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
console.log(mySearch('hihi', 'bi'));
var mySearch2 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
console.log(mySearch2('hihi', 'bi'));
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
console.log(myStr);
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var myArray2 = ["Alice", "Bob"];
var Clock = (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = (function () {
    function AnalogClock(h, n) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tick");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
digital.tick();
var analog = createClock(AnalogClock, 7, 32);
analog.tick();
var square = {};
square.color = "blue";
square.sideLength = 10;
var square2 = {};
square2.color = "blue";
square2.sideLength = 10;
square2.penWidth = 5.0;
console.log(square2);
function getCounter() {
    var start2;
    var counter = (function (start) { start2 = start; });
    counter.interval = 123;
    counter.reset = function () {
        console.log(this.interval + start2);
    };
    return counter;
}
var ct = getCounter();
ct(10);
ct.interval = 5.0;
ct.reset();
var Control = (function () {
    function Control() {
    }
    return Control;
}());
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
var Location2 = (function () {
    function Location2() {
    }
    return Location2;
}());
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
var myAdd2 = function (x, y) {
    return x + y;
};
var myAdd3 = function (x, y) {
    return x + y;
};
var myAdd4 = function (x, y) { return x + y; };
var myAdd5 = function (x, y) {
    return x + y;
};
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + lastName;
    }
    else {
        return firstName;
    }
}
console.log(buildName('hi', 'bi'));
//# sourceMappingURL=app.js.map