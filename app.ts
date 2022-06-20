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