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

namespace LearnTs{
    class Program{
        static Main(): void {
            Console.WriteLine("Hello World!");
        }
    }

    class Console {
        static WriteLine(value: string){
            console.log(value);;
        }
    }

    let val = Program.Main();
}