// 定义泛型接口，显式展示泛型参数
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();

console.log('----------------------------');
// 泛型约束
interface mans {
    length: number
}   
function loggingIdentity<T extends mans>(arg: T): T {
    console.log(arg.length); 
    return arg
}
// let people : man<string> = (arg) => {
//   return arg
// }
// people('123')

// 泛型约束参数
console.log('-------------------');

 function getProperty<T, K extends keyof T>(obj: T,key: K) {
    return obj[key]
 }
 let obj = {
    name: '刘好好',
    age: 12
 }
 console.log(getProperty(obj,'name'));

 // 再泛型中使用类类型
 class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

console.log(createInstance(Lion).keeper.nametag)  // typechecks!);

console.log(createInstance(Bee).keeper.hasMask)   // typechecks!;

 