let isDone: boolean = false;

console.log(isDone);
let deciaml: number = 6;

console.log(deciaml);

let fullName: string = `Bob bobbington`;

let sentence: string = `Hello, ${fullName}`;
console.log(sentence);

let list1: number[] = [1,2,3];
console.log(list1);
console.log(typeof list1);

let list2: Array<number> = [1,2,3];
console.log(list2);
console.log(typeof list2);

let x: [string, number];

x = ['hello', 10];

// x = [10, 'hello'];
x = ['hi', 20];

console.log(x);
console.log(x[0].substring(1));

// enum Color {Red, Green, Blue}

enum Color {Red = 1, Green, Blue}

let colorName: number = Color.Red;
let c: Color = Color.Red;

let notSure: any = 4;

notSure = "maybe a string";

notSure = false;

// notSure.ifItExists();
// notSure.toFixed();

let prettySure: Object = 4;
// prettySure.toFixed();


let list: any[] = [1,true,'free'];

list[1] = 100;

function warnUser(): void {
    console.log('this is my warning message');
}

warnUser();

let unusable: void = undefined;
unusable = null
// void type은 undefined와 null만 할당 가능하기때문에 유용하지 않음

let u: undefined = undefined;
let n: null = null;

u = null;
n = undefined;

function error(message: string): never {
    throw new Error(message);
}

// error('hi');

function fail() {
    return error("something failed");
}

function infiniteLoop(): never {
    while(true) {

    }
}


declare function create(o: object | null): void;

// create({ prop: 0});
// create(null);

// create(42);
// create("string");
// create(false);
// create(undefined);


let someValue: any = 'this is a string';

let strLength: number = (<string>someValue).length;

console.log(strLength)
let strLenght2: number = (someValue as string).length;

console.log(strLenght2)

/*
function printLabel(labeledObj: { label: string}) {
    console.log(labeledObj.label);
}*/

let myObj = {size: 10, label: "Size 10 object"};
printLabel(myObj);

interface LabeledValue {
    label: string,
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquare(config: SquareConfig): {color: string, area: number} {
    let newSquare = {color: 'white', area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }

    if(config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mySquare = createSquare({color: 'black'})
console.log(mySquare);

let mySquare2 = createSquare({ width: 100, opacity: 0.5} as SquareConfig);

let mySqaure3 = createSquare({width:100, opacity: 0.5});

console.log(mySquare2)
console.log(mySqaure3)

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20};
// p1.x = 5; //error!

let a: number[] = [1,2,3,4];
let ro: ReadonlyArray<number> = a;
let ro2: readonly number[] = a;
console.log(ro);
console.log(ro2);
a[1] = 7;
console.log(ro);
console.log(ro2);

// ro[0] = 12;
// ro.push(5);
// ro.length = 100;
// a = ro;

// ro2[0] = 12;
// ro2.push(4);
// ro2.length = 100;
// a = ro2;

a = ro as number[];

console.log(a);

interface SearchFunc {
    (source: string, substring: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

console.log(mySearch('hihi','bi'));

let mySearch2: SearchFunc = function(src, sub) {

    let result = src.search(sub);
    return result > -1;
}

console.log(mySearch2('hihi','bi'));

interface StringArray {
    [idx: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

console.log(myStr);

class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

interface NotOkay {
    // [x: number]: Animal;
    [x: string]: Dog;
}

interface NumberDictionary {
    [index: string]: number;
    length: number;
    // name: string; // 인덱서의 하위 타입이 아니라서 오류
}

interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number;
    name: string;
}

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
// myArray2[2] = "Mallory"; // error!

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    constructor(h: number, m: number) {
    }

    setTime(d: Date): void {
        this.currentTime = d;
    }
}

/*
interface ClockConstructor {
    new (hour: number, minute: number);
}

class Clock2 implements ClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number) {
    }
    //클래스가 인터페이스 구현시 클래스의 인스턴스만 검사하기 떄문에 스태틱인 생성자는 검사에 포함되지 않음.
}*/

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface2;
}

interface ClockInterface2 {
    tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface2 {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface2 {
    constructor(h: number, m: number) {
    }
    tick(): void {
        console.log("beep beep");
    }
}

class AnalogClock implements ClockInterface2 {
    constructor(h: number, n: number) {
    }
    tick(): void {
        console.log("tick tick");
    }
}

let digital = createClock(DigitalClock, 12, 17);
digital.tick()
let analog = createClock(AnalogClock, 7, 32);
analog.tick()


/*
interface ClockConstructor2 {
    new (hour: number, minute: number);
}

interface ClockInterface3 {
    tick(): void;
}

const Clock2: ClockConstructor2 = class Clock implements ClockInterface3 {
    constructor(h: number, m: number) {
    }

    tick() {
        console.log("beep beep");
    }
}
*/


