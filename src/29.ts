// class Animal {
//     feed():void {
//         console.log("Кормим животное");
//     }
// }
  
// class Movable {
//     speed: number=0;
//     move(): void {
//         console.log("Перемещаемся");
//     }
// }
  
// class Horse {}
// interface Horse extends Animal, Movable {}
  
// function applyMixins(derivedCtor: any, baseCtors: any[]) {
//     baseCtors.forEach(baseCtor => {
//         Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//             derivedCtor.prototype[name] = baseCtor.prototype[name];
//         });
//     });
// }
  
// applyMixins(Horse, [Animal, Movable]);
// let pony: Horse = new Horse();
// pony.feed();
// pony.move();


// namespace LearnTs{
//     export class Program{
//         static Main(): void {
//             Console.WriteLine("Hello World!");
//         }
//     }

//     export class Console {
//         static WriteLine(value: string) {
//             console.log(value);;
//         }
//     }
    
// }

// LearnTs.Program.Main();



// let message = "Hello TypeScript!";
// function hello(){
//     console.log(message);
// }
         
// function sum(a, b){
//     return a + b;
// }

	
// hello();
 
// let result = sum(2, 5);
// console.log(result);

// $(() => {
//     $("#content").html("<h1>Привет TypeScript</h1>");
// });


// function sealed(constructor: Function) {
//     console.log("sealed decorator");
//     Object.seal(constructor);
//     Object.seal(constructor.prototype);
// }
 
// @sealed
// class User {
//     name: string;
//     constructor(name: string){
//         this.name = name;
//     }
//     print():void{
//         console.log(this.name);
//     }
// }


// function logParameter(target: any, key : string, index : number) {
//     var metadataKey = `__log_${key}_parameters`;
     
//     if (Array.isArray(target[metadataKey])) {
//         target[metadataKey].push(index);
//       }
//       else {
//         target[metadataKey] = [index];
//     }
// }
// function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
//     var originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
 
//         var metadataKey = `__log_${key}_parameters`;
//         var indices = target[metadataKey];
 
//         if (Array.isArray(indices)) { 
//             for (var i = 0; i < args.length; i++) { 
         
//                 if (indices.indexOf(i) !== -1) { 
//                     var arg = args[i];
//                     var argStr = JSON.stringify(arg) || arg.toString();
//                     console.log(`${key} arg[${i}]: ${argStr}`);
//                 }
//             }
//             var result = originalMethod.apply(this, args);
//             return result;
//         }
//         else {
//             var a = args.map(a => (JSON.stringify(a) || a.toString())).join();
//             var result = originalMethod.apply(this, args);
//             var r = JSON.stringify(result);
//             console.log(`Call: ${key}(${a}) => ${r}`);
//             return result;
//         }
//     }
//     return descriptor;
// }
 
// class User {
//     private name: string;
//     constructor(name: string){
//         this.name = name;
//     }
//    @logMethod
//     setName(@logParameter name: string){
//         this.name = name;
//     }
//     print():void{
//         console.log(this.name);
//     }
// }
// let tom = new User("Tom");
// tom.setName("Bob");
// tom.setName("Sam");


// function format() {
//     return function(target: Object, propertyKey: string) { 
//       let value : string;
//       const getter = function() {
//         return "Mr./Ms." + value;     // изменяем возвращаемое значение
//       };
//       const setter = function(newVal: string) {
//          if(newVal.length > 2) {   // добавляем проверку на длину строки
//             value = newVal
//         }     
//       }; 
//       // устанавливает геттер и сеттер для свойства
//       Object.defineProperty(target, propertyKey, {    
//         get: getter,
//         set: setter
//       });
//     }
//   }
   
//   class User {
    
//       @format()
//       name: string;
//       constructor(name: string){
//           this.name = name;
//       }
//       print():void{
//           console.log(this.name);
//       }
//   }
//   let tom = new User("Tom");
//   tom.print();
//   tom.name = "Tommy";
//   tom.print();
//   tom.name = "To";
//   tom.print();


// function regex(pattern: string){
//     let expression = new RegExp(pattern);
//     return function regex(target: Object, propertyName: string){
//         let propertyValue = this[propertyName];
 
//         // геттер
//         var getter = function () {
//             return propertyValue;
//         };
  
//         // сеттер
//         var setter = function (newVal: string) {
//             let isValid: boolean = expression.test(newVal); 
//             if(isValid === false){
//                 throw new Error(`Value ${newVal} does not match ${pattern}`);
//             }
//             else{
//                 console.log(`${newVal} is valid`);
//             }
//         };
//         // удаляем свойство
//         if (delete this[propertyName]) {
     
//             // И создаем новое свойство с геттером и сеттером
//             Object.defineProperty(target, propertyName, {
//                 get: getter,
//                 set: setter
//             });
//         }
//     }
// }
// class Account{
//     @regex("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")
//     email: string;
 
//     @regex("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")
//     phone: string;
 
//     constructor(email: string, phone: string){
//         this.email = email; this.phone = phone;
//     }
// }
// let acc = new Account("bir@gmail.com", "+23451235678");
// acc.email = "bir_iki_yedi";