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
var colors = ["\u7EA2\u8272" /* color.RED */, "\u7C89\u8272" /* color.PINK */, "\u84DD\u8272" /* color.BLUE */];
console.log(colors);
// 元组扩展
var tupleX = ['1', 2]; //ok
var tupleY;
// tupleY= ['1', 2, 3]  // error 
var tupleZ;
// tupleZ = ['12']
tupleZ = ['12', 3, 2, '123', '123124', 4];
var arrays = [1, '', 2, 34, 4, 'wqeqw'];
console.log(arrays);
// 第三项没有声明类型，默认类型为anys
var Tarpans = ['123', 123.1233, false];
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
var x = '123';
// x = '12' error
// x = '1234' error
// 类的继承
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
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
}(Animal));
var Horse = /** @class */ (function (_super) {
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
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
var mun = Number(123545644422557);
var mun2 = Number(1235456444225578912);
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
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        console.log(Grid.origin);
        console.log(this);
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0); // 1x scale
var grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// 抽象类
var people = /** @class */ (function () {
    function people(name) {
        this.name = name;
    }
    return people;
}());
var man = /** @class */ (function (_super) {
    __extends(man, _super);
    function man() {
        return _super.call(this, '男人') || this;
    }
    man.prototype.behavior = function () {
        throw new Error("Method not implemented.");
    };
    man.prototype.run = function () {
        console.log('123');
    };
    return man;
}(people));
var one = new man();
console.log(one.name);
console.log(typeof man);
// 构造函数
console.log('-------------------------');
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = "Hello, there";
    return Greeter;
}());
var greeter1;
greeter1 = new Greeter();
console.log(greeter1.greet());
var greeterMaker = Greeter;
console.log(typeof Greeter);
console.log(greeterMaker);
console.log(greeterMaker.prototype);
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
// 类当做接口
console.log('-------------------------');
function createdCat(params, name) {
    return new params(name);
}
var cat = /** @class */ (function () {
    function cat(name) {
        this.name = name;
        this.Skills = '捕鼠';
    }
    cat.prototype.climb = function () {
        console.log('毛爬树');
    };
    return cat;
}());
var dog = /** @class */ (function () {
    function dog(name) {
        this.name = name;
        this.Skills = '放羊';
    }
    dog.prototype.climb = function () {
        console.log('狗游泳');
    };
    return dog;
}());
var liuhaohao = createdCat(cat, '刘好好');
var liuxiaoguai = createdCat(dog, '刘小乖');
console.log(liuhaohao);
console.log(liuxiaoguai);
liuhaohao.climb();
liuxiaoguai.climb();
