class User {
    name: string;
    constructor(_name: string) {

        this.name = _name;
    }
}
const tom: User = new User("Том");
// const header = this.document.getElementById("header");
// header.innerHTML = "Привет " + tom.name;
console.log("Hello World!");
console.log("Hello World!");

// function add(a: number): number{
//     return a * 2;
// }

// function add(a: number, b: number): number{
//     return a + b;
// }

// console.log(add(2));
// console.log(add(10, 20));



function add(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(add(2));          // Output: 2
console.log(add(10, 20));      // Output: 30
console.log(add(1, 2, 3, 4));  // Output: 10
