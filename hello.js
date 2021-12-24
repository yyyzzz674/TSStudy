/*
 * @Author: zhuo
 * @Date: 2020-08-28 16:20:41
 * @LastEditTime: 2021-12-24 17:29:21
 */
function sayHello(person) {
    if (typeof person === 'string') {
        return 'Hello, ' + person;
    }
    else {
        throw new Error('person is not a string');
    }
}
const user = 'tom';
console.log(sayHello(user));
// 原始数据类型
let isDone = true;
// -------------------------------------------------
let decLiteral = 6;
let hexLiteral = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral = 0b1010;
// ES6 中的八进制表示法
let octalLiteral = 0o744;
let notANumber = NaN;
let infinityNumber = Infinity;
// -------------------------------------------------
let myName = 'Tom';
let myAge = 25;
// 模板字符串
let sentence = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
// -------------------------------------------------
function alertName() {
    alert('My name is Tom');
}
// -------------------------------------------------
let myFavoriteString = 'seven'; // 等价于 let myFavoriteString:string = 'seven'
let myFavoriteNumber; // 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
// -------------------------------------------------
let myFavoriteNumber1; // 联合类型
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
// -------------------------------------------------
function getLength(something) {
    return something.toString(); // 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
}
let tom = {
    name: 'Tom',
    age: 18,
    gender: 'male',
    id: 1
};
// -------------------------------------------------
