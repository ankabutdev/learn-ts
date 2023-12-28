// class User {
//     name: string;
//     constructor(_name: string) {

//         this.name = _name;
//     }
// }
// const tom: User = new User("Том");
// // const header = this.document.getElementById("header");
// // header.innerHTML = "Привет " + tom.name;
// console.log("Hello World!");
// console.log("Hello World!");

// // function add(a: number): number{
// //     return a * 2;
// // }

// // function add(a: number, b: number): number{
// //     return a + b;
// // }

// // console.log(add(2));
// // console.log(add(10, 20));



// function add(...numbers: number[]): number {
//     return numbers.reduce((sum, num) => sum + num, 0);
// }

// console.log(add(2));          // Output: 2
// console.log(add(10, 20));      // Output: 30
// console.log(add(1, 2, 3, 4));  // Output: 10


// let x = 10;
// console.log(x); // 10

// var x2 = 20;     // ! Ошибка
// console.log(x); // Но консоль выведет 20

// const t = 50;
// // t = 256;        // ! Ошибка
// console.log(t); // Но консоль выведет 256

// console.log(t);

// let x: number = 10; 
// let hello: string = "hello world";
// let isValid: boolean = true;

// var number: number|null = 10;
// number = null;
// console.log(number);

// console.log(x);
// console.log(hello);
// console.log(isValid);

// let hello: string = "hello world";
// hello = "23";
// console.log(hello);

// let decimal: number = 6;
// // шестнадцатиричная система
// let hex: number = 0xf00d;       // 61453 в десятичной
// // двоичная система
// let binary: number = 0b1010;    // 10 в десятичной
// // восьмиричная система
// let octal: number = 0o744;      // 484 в десятичной
// console.log(decimal);
// console.log(hex);
// console.log(binary);
// console.log(octal);

// let firstName: string = "Tom";
// let age: number = 28;
// let info: string = `Name: ${firstName}, Age: ${age}`;
// console.log(info);

// let sentence:string = `Hello Wolrd!
// Good Bye World!`;
// console.log(sentence);


// const num1: bigint = BigInt(100);
// console.log(num1);

// const num2: bigint = 100n;
// console.log(num2);

// let someVar: any = "hello";
// console.log(someVar);   // сейчас someVar - это string
// someVar = 20; 
// console.log(someVar);   // сейчас someVar - это number

// var someArray: any = [23, true, "Hello", null];
// someArray.forEach(element => {
//     if (element != null)
//         console.log(element);
// });

// let sum: any;
// sum = 1200;
// sum = "тысяча двести";
// let result: number = sum / 12;
// console.log(result); // NaN - строку нельзя разделить на число

// let sum: any;
// sum = null;

// if (typeof sum === "number") {

//     let result: number = sum / 12;
//     console.log(result);
// }
// else{
//     console.log("invalid operation");
// }


// function some(params: any) {
//     console.log(params);
// }

// some({ name: "Salohiddin", age: 19 })


// let a: number = 1.5;

// function add(b:number){
//     return b*a;
// }
// console.log(add(4));

// // определение функции
// function add(a: number, b: number){
//     let result = a + b;
//     console.log(result);
// }
// // вызов функции
// add(20, 30); // 50
// add(10, 15); //25

// function hello (){
//     console.log("Hello TypeScript");
// };

// hello();

// function hello (){
//     console.log("Hello TypeScript");
// };
 
// const message: ()=>void = hello;
// message();

// function sum (x: number, y: number): number {
//     return x + y;
// };
// function subtract (a: number, b: number): number {
//     return a - b;
// };
 
// let op: (x:number, y:number) => number;
 
// op = sum;
// console.log(op(2, 4));  // 6
 
// op = subtract;
// console.log(op(6, 4));  // 2

// const square = x => x * x;

// console.log(square(2));

// function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number{
 
//     const result = operation(x, y);
//     return result;
// }
// console.log(mathOp(10, 20, (x, y) => x + y)); // 30 
// console.log(mathOp(10, 20, (x, y) => x * y)); // 200

// const x: ReadonlyArray<string> = [];


// const numbers = [1,2,3,4,5,6] as const



// interface IUser{
//     make():void; 
//     name:string;
// }

// class User implements IUser{
//     constructor() {
//     }
//     name: string;

//     make(): void {
//         console.log("make");
//     }
// }

// let u = new User();
// u.make();

// import myModuleDefaultExport from './myModule.js';

// console.log(myModuleDefaultExport);
// console.log(myModuleDefaultExport);



