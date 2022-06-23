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
function buildName2(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName2("joseph", "samuel", "lucas", "mackinzie");
console.log(employeeName);
var buildNameFun = function (fname) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return fname + " " + rest.join(" ");
};
console.log(buildNameFun("joseph", "samuel", "lucas", "mackinzie"));
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log(pickedCard.card, pickedCard.suit);
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    if (typeof x == "object") {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "dismonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "heaerts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log(pickedCard1.card, pickedCard1.suit);
var pickedCard2 = pickCard(15);
console.log(pickedCard2.card, pickedCard2.suit);
var UIElement = (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === "ease-in") {
            console.log('a');
        }
        else if (easing === "ease-out") {
            console.log('b');
        }
        else if (easing === "ease-in-out") {
            console.log('c');
        }
        else {
            console.log('d');
        }
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, "ease-in");
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1);
}
var result = rollDice();
console.log(result);
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got '".concat(padding, "'."));
}
console.log(padLeft("Hello world", 5));
function padLeft3(value, padding) {
}
function networkStatus(state) {
    switch (state.state) {
        case "loading":
            return "Downloading..";
        case "fail":
            return "Error ".concat(state.code, " downloading");
        case "success":
            return "Download ".concat(state.response.title, " - ").concat(state.response.summary);
    }
}
var handleArtistsResponse = function (response) {
    if (response.error) {
        console.error(response.error.message);
        return;
    }
    console.log(response.artists);
};
var testResposne = {
    artists: [{ name: 'hi' }, { name: 'bi' }, { name: 'ci' }],
    success: true,
    error: { message: 'hi' }
};
handleArtistsResponse(testResposne);
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (name) {
        console.log("Hello, I'm ".concat(name, "."));
    };
    return ConsoleLogger;
}());
function extend(first, second) {
    var result = {};
    for (var prop in first) {
        if (first.hasOwnProperty(prop)) {
            result[prop] = first[prop];
        }
    }
    for (var prop in second) {
        if (second.hasOwnProperty(prop)) {
            result[prop] = second[prop];
        }
    }
    return result;
}
var jim = extend(new Person("Jim"), ConsoleLogger.prototype);
jim.log(jim.name);
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
console.log(greeter.greet());
var Animal2 = (function () {
    function Animal2() {
    }
    Animal2.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved ".concat(distanceInMeters, "m."));
    };
    return Animal2;
}());
var Dog2 = (function (_super) {
    __extends(Dog2, _super);
    function Dog2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog2.prototype.bark = function () {
        console.log("Woof! Woof!");
    };
    Dog2.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log('mo,,');
    };
    return Dog2;
}(Animal2));
var dog = new Dog2();
dog.bark();
dog.move(10);
dog.bark();
var Animal3 = (function () {
    function Animal3(tehName) {
        this.name = tehName;
    }
    Animal3.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("".concat(this.name, " moved ").concat(distanceInMeters));
    };
    return Animal3;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal3));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal3));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
//# sourceMappingURL=app.js.map