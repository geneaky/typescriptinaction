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


interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;


interface PenStroke {
    penWidth: number;
}

interface Square2 extends Shape, PenStroke {
    sideLength: number;
}

let square2 = {} as Square2;
square2.color = "blue";
square2.sideLength = 10;
square2.penWidth = 5.0;

console.log(square2);

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let start2: number;
    let counter = (function(start: number) { start2 = start}) as Counter;
    counter.interval = 123;
    counter.reset = function() {
        console.log(this.interval + start2);
    };
    return counter;
}

let ct = getCounter();
ct(10);
ct.interval = 5.0;
ct.reset();

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

/*
class Image2 implements SelectableControl {
    private state: any;
    select(): void {
    }
    // private state: any; // property 'state' is missing in type 'Image';
}
*/

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

class Location2 {

}

function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function (x: number, y: number): number {
    return x + y;
};

let myAdd2: (x: number, y: number) => number =
    function(x: number, y: number): number {
        return x + y;}

let myAdd3: (baseValue: number, increment: number) => number //function type
    = function(x: number, y: number): number {
    return x + y;}


let myAdd4 = function(x: number, y: number): number { return x + y}

let myAdd5: (baseValue: number, increment: number) => number
=function(x,y) {
    return x + y;
}

function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + lastName;
    } else {
        return firstName;
    }
}

console.log(buildName('hi', 'bi'));

function buildName2(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName2("joseph", "samuel", "lucas", "mackinzie");

console.log(employeeName);

let buildNameFun: (fname: string, ...rest: string[]) => string = (fname: string, ...rest:string[]) => {
    return fname + " " + rest.join(" ");
}

console.log(buildNameFun("joseph", "samuel", "lucas", "mackinzie"));

/*let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // NOTE: 아랫줄은 화살표 함수로써, 'this'를 이곳에서 캡처할 수 있도록 합니다
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}*/

/*let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);*/

interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function (this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log(pickedCard.card, pickedCard.suit);

interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

/*
class Handler {
    info: string;
    onClickBad(this: Handler, e: Event) {
        this.info = e.message;
    }
}

let h = new Handler();
*/


/*
class Handler {
    info: string;
    onClickGood(this: void, e: Event) {
        console.log('clicked!');
    }
}

let h = new Handler();
*/

/*
class Handler {
    info: string;
    onClickGood = (e: Event) => {this.info = e.message};
}*/


let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number;}[]): number;
function pickCard(x: number): {suit: string; card: number;};
function pickCard(x: any): any {

    if(typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }

    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x /13);
        return { suit: suits[pickedSuit], card: x %13 };
    }
}

let myDeck = [{suit:"dismonds", card:2}, {suit:"spades", card: 10}, {suit: "heaerts", card: 4}]
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log(pickedCard1.card, pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log(pickedCard2.card, pickedCard2.suit)

type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if(easing === "ease-in") {
            console.log('a');
        }else if(easing==="ease-out") {
            console.log('b');
        }else if(easing ==="ease-in-out") {
            console.log('c');
        }else {
            console.log('d');
        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy"); // not assignable to pararmeter of type 'Easing'

function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

const result = rollDice();

console.log(result);

function padLeft(value: string, padding: any) {
    if(typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }

    if(typeof padding === "string") {
        return padding + value;
    }

    throw new Error(`Expected string or number, got '${padding}'.`);
}

console.log(padLeft("Hello world", 5));

declare function padLeft2(value: string, padding: any): string;

// let indentedString = padLeft2("hellow world", true); // 런타입 에러

function padLeft3(value: string, padding: string|number) {

}

// let indentedString2 = padLeft3("hellow word", true); // 컴파일 에러 유니언 타입

interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;

    layEggs(): void;
}

// declare function getSmallPet(): Fish|Bird;

// let pet = getSmallPet();
// pet.layEggs();

//2개중 택일로 사용가능하기때문에 layEggs만 동작
// pet.swim();

type NetworLoadingState = {
    state: "loading";
};

type NetworFailState = {
    state: "fail";
    code: number;
};

type NetworSuccessState = {
    state: "success";
    response: {
        title: string;
        duartion: number;
        summary: string;
    }
};

type NetworkState = | NetworLoadingState | NetworFailState | NetworSuccessState;

function networkStatus(state: NetworkState): string {
    // state.code; //오류 발생

    switch(state.state) {
        case "loading":
            return "Downloading..";
        case "fail":
            return `Error ${state.code} downloading`;
        case "success":
            return `Download ${state.response.title} - ${state.response.summary}`;
    }
}

interface ErrorHandling {
    success: boolean;
    error?: {message: string};
}

interface ArtworksData {
    artworks: {title: string}[];
}

interface ArtistsData {
    artists: {name: string}[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

const handleArtistsResponse = (response: ArtistsResponse) => {
    if(response.error) {
        console.error(response.error.message);
        return;
    }

    console.log(response.artists);
}

let testResposne: ArtistsResponse = {
    artists: [{name: 'hi'},{name:'bi'},{name:'ci'}],
    success: true,
    error: {message: 'hi'}
}

handleArtistsResponse(testResposne);

class Person {
    constructor(public name: string) {
    }
}

interface Loggable {
    log(name: string): void;
}

class ConsoleLogger implements Loggable {
    log(name: string): void {
        console.log(`Hello, I'm ${name}.`);
    }
}

function extend<First extends {}, Second extends {}>(
    first: First,
    second: Second
): First & Second {
    const result: Partial<First & Second> = {};
    for(const prop in first) {
        if(first.hasOwnProperty(prop)) {
            (result as First)[prop] = first[prop];
        }
    }

    for(const prop in second) {
        if(second.hasOwnProperty(prop)) {
            (result as Second)[prop] = second[prop];
        }
    }

    return result as First & Second;
}

const jim = extend(new Person("Jim"), ConsoleLogger.prototype);
jim.log(jim.name);

