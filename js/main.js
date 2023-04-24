
/* 在chrome开发工具中的memory中查看profile,可以take snapshot查看各个对象在内存中占用情况 */
function Person (name){
    this.name = name;
}
const person1 = new Person('li');
const person2 = new Person('ja');
const person3 = new Person('bo');