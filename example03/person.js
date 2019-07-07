class Person {
  constructor(name,age){
    this.Name=name;
    this.Age=age;
  }
  greeting(){
    return (`My name is ${this.Name} and I am ${this.Age}`);
  }
}
module.exports = Person;