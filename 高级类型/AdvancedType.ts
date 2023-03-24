
// 联合类型
// interface Bird {
//     fly();
//     layEggs();
// }

// interface Fish {
//     swim();
//     layEggs();
// }

// let one : Bird = {
//     fly(){
//       console.log('one-fly');
      
//     },
//     layEggs() {
//         console.log('one-layEggs');
//     }
// }
// let two : Fish = {
//     swim(){
//       console.log('two-swim');
      
//     },
//     layEggs() {
//         console.log('two-layEggs');
//     }
// }
// function getSmallPet(prg: Bird | Fish): Bird | Fish {
//     return prg
// }
// let pet = getSmallPet(one);
// console.log((pet as Fish).swim());  // 型保护与区分类型 ->使用断言，访问Bird特有方法
// // 运用错误的类型时，ts检测会通过，但浏览器会提示TypeError错误
// console.log(pet.layEggs());

// pet.fly()  //  error 这里只能取到联合类型中的共有成员layEggs()
// 不能使用Bird | Fish单独的方法
// function isFish(pet: Fish | Bird): pet is Fish {
//     return (<Fish>pet).swim !== undefined;
// }
// if (isFish(pet)) {
//     pet.swim();
//     console.log(45);
// }
// else {
//     pet.fly();
//     console.log(49);
// }

// 类型收窄
function sum(x: string | number , y: number | boolean) {
   if(x === y) {
    return x + y
   }
   return x +' - '+ y
}
console.log(sum(1,2));
console.log(sum('123', true));

// typeof
let s = '123'
type y = typeof s  // y ===string
// 字面量类型
type ys= '123'














