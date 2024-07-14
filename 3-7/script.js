function Person(name, age) {
  this.name = name;
  this.age = age;
}
let myBrother = new Person("Mehdi", 20);
let mySister = new Person("Hana", 12);

Person.prototype.lastName = "Sadeqi"

console.log(myBrother.lastName)

Person.prototype.intro = function () {
  return this.name + " " + this.lastName;
};
let myName = "Ali"
Person.prototype.intro2 = () => {
  return myName + " " + myName;
};
console.log(mySister.intro2())