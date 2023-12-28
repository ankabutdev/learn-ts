// function printSentence(words: string[]|string){
//     if (typeof words === "string") {
//       console.log(words);
//     } else {
//       console.log(words.join(" "));
//     }
// }

// printSentence(["Язык", "программирования", "TypeScript"]);
// printSentence("Язык программирования JavaScript");
// printSentence("help");

// const header: HTMLElement|null = document.getElementById("header");
// header.innerText = "Hello Typescript!";
// header.innerText = null;

// let tom: { name: string; age?: number } = { name: "Tom", age: 23 };
// let bob: { name: string; age?: number } = { name: "Bob"};

// function printUser(user: { name: string; age?: number }){
//     if("age" in user){
//         console.log(`Name: ${user.name} Age: ${user.age}`);
//     }
//     else{
//         console.log(`Name: ${user.name}`);
//     }
// }

// printUser(tom);
// printUser(bob);


// const people: string[]= ["Tom", "Bob", "Sam"];
 
// const [first, ...rest] = people;
// console.log(first);     // Tom
// console.log(rest[0]);   // Bob
// console.log(rest[1]);       // Sam



// const people: string[]= ["Tom", "Bob", "Sam", "Kate"];
 
// const [, second, , forth] = people; // пропускаем первый и третий элементы массива
// console.log(second);        // Bob
// console.log(forth);         // Kate


// enum Season { Winter, Spring, Summer, Autumn};

// enum Season { 
//     Winter = "Зима", 
//     Spring = "Весна",
//     Summer = "Лето", 
//     Autumn = "Осень"
// };
// var current: Season = Season.Summer;
// console.log(current);   // Лето

// class Animals{
//     constructor(name:string) {
//         this.name = name;
//     }
//     private name:string

//     getName(): string{
//         return this.name;
//     }
// }

// const animal = new Animals("bird");
// console.log(animal.getName());



// abstract class Animals{
//     abstract getName(): string;
//     abstract name:string;
// }
// class Bird extends Animals{
//     constructor(name:string) {
//         super();
//         this.name = name;
//     }
//     name: string;
//     getName(): string {
//         return this.name;
//     }
// }
// const bird = new Bird("qush");
// console.log(bird.getName());


// class Person {
//     name: string;
//     constructor(userName: string) {
//         this.name = userName;
//     }
// }
  
// class Employee extends Person {
//     company: string;

//     constructor(userName: string, company: string) {
//         super(userName);
//         this.company = company;
//     }
// }

// let tom : Person = new Employee("Tom", "Microsoft");
// console.log(tom.name);


// class Person {
//     name: string;

//     constructor(userName: string) {
//         this.name = userName;
//     }
// }
  
// class Employee extends Person {
//     company: string;

//     constructor(userName: string, company: string) {
//         super(userName);
//         this.company = company;
//     }
// }
 
// function printPerson(user: Person): void{
//     console.log(`Person ${user.name}`);
// }
  
// function personFactory(userName: string): Person {
//     return new Employee(userName, "не установлено");
// }
  
// let tom : Person = new Employee("Tom", "Microsoft");
// printPerson(tom);
 
// let bob = personFactory("Bob");
// printPerson(bob);

// printPerson({ name: "Bob", company: "Microsoft" } as Person);

// function getId<T>(id: T): T{
//     return id;
// }

// let result = getId(5);
// console.log(result);
// let result2 = getId<number>(2);
// console.log(result2);
// console.log(typeof(result2));

