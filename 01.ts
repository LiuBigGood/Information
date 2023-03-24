// enum
// enum Color {Red = 7, Green =6, Blue = 5}
// let c: Color = Color.Green;
// console.log(c);
const enum color {
    RED  = '红色',
    PINK = '粉色',
    BLUE = '蓝色',
}
let colors : color[] = [color.RED, color.PINK, color.BLUE]
console.log(colors);
 
// 元组扩展
let tupleX: [string, number] = ['1', 2]  //ok
let tupleY: [string, number]
// tupleY= ['1', 2, 3]  // error 
let tupleZ : [string, ...(number | string)[]]
// tupleZ = ['12']
tupleZ = ['12', 3 , 2, '123','123124',4]


// 可索引类型
interface Isarray{
    [index: number] : number | string
}

let arrays : Isarray = [1,'',2,34,4,'wqeqw']
console.log(arrays);

// 用接口模拟元组
interface Tarrasa{
    0: string,
    1?:number,
    length: 1 | 2 | 3
}
// 第三项没有声明类型，默认类型为anys
let Tarpans: Tarrasa =['123', 123.1233, false]
console.log(Tarpans);


// // any
// let notSure: any = 4;
// // notSure.ifItExists(); // okay, ifItExists might exist at runtime
// // notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
// // never
// function xxx(params:any): never {
//     while (true) {
        
//     }
// }
// 数组结构
// let array = [1,2,3,4]
// let [one,...two] = array
// console.log(one);
// console.log(two);

// 对象结构
// let o = {
//     a: "foo",
//     b: 12,
//     c: "bar"
// };
// let { a, ...b } = o;
// console.log(a,b);
// interface LabelledValue  {
//     label: string 
// }
// function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label);
//   }
  
//   let myObj = { size: 10};
//   printLabel(myObj);

// // 只读属性、可选属性
// interface SquareConfig {
//     readonly color: string;
//     width?: number;
// }
// let obj :SquareConfig = {
//     color: 'red',
//     width: 1
// }
// obj.color = 'xxx'  // 无法为“color”赋值，因为它是只读属性。
// let array : ReadonlyArray<number> = [1,2,3,4,5]
// array[2] = 3 // error!
// array.push(3) // error!

let x  = '123' as const 
// x = '12' error
// x = '1234' error
// 类的继承
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);

let mun = Number(123545644422557)
let mun2 = Number(1235456444225578912)
// let mun3 = bigInt(1235456444225578912)
// console.log(mun, mun2, mun3);

// 存取器
// class Employee {
//     fullName: string;
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     console.log(employee.fullName);
// }
// class  Employee{
//     private _fullName: string;
//     get fullName(): string {
//         return this._fullName
//     }
    
//     set fullName(v : string) {
//         if(v && v === 'secret passcode') {
//             this._fullName = v
//         } else {
//         console.log("Error: Unauthorized update of employee!"); 
//         }
//     }
    
// }
// let aaa = new Employee()
// console.log(aaa.fullName);
// aaa.fullName = '12313' // console.log("Error: Unauthorized update of employee!"); 

// 静态属性
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        console.log(Grid.origin);
        console.log(this);
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

// 抽象类
abstract class people {
    constructor(public name : string) {}
    abstract behavior():void
}
class man extends people {
    constructor() {super('男人')}
    behavior(): void {
        throw new Error("Method not implemented.");
    }
    run() {
        console.log('123');
    }  
}
let one = new man()
console.log(one.name);
console.log(typeof man);


// 构造函数
console.log('-------------------------');
class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
console.log(typeof Greeter);
console.log(greeterMaker);
console.log(greeterMaker.prototype);

greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());

// 类当做接口
console.log('-------------------------');
// class Point {
//     (x : number): number
//     y: number;
//     [propName: string]: any
// }
// let point3d: Point = {x: 1, y: 2, z: 3, o: '123'};
// console.log(point3d);

// symbols
// let other = Symbol('key')
// let four = {
//    [other]:"123" 
// }

// 接口封装类
// 实例属性
interface Animals {
    name: string,
    Skills: string
    climb():void
}
// 静态属性
interface AnimalsConstructor{
  new (name: string) : Animals
}

function createdCat(params: AnimalsConstructor, name: string): Animals{
    return new params(name)
}

class cat implements Animals{ 
  Skills:string = '捕鼠';  
  constructor(public name:string) {}
  climb() {
    console.log('毛爬树');
    
  }
}
class dog implements Animals{
    Skills:string = '放羊';  
    constructor(public name:string) {}
    climb() {
      console.log('狗游泳');
      
    }
  }

let liuhaohao = createdCat(cat,'刘好好')
let liuxiaoguai = createdCat(dog,'刘小乖')
console.log(liuhaohao);
console.log(liuxiaoguai);
liuhaohao.climb()
liuxiaoguai.climb()
