class ABC {
  constructor(name) {
    //instance properties

    this.name = name;

    this.sayHello = function () {
      console.log("Hello");
    };
  }
  sayBye() {
    console.log("Bye");
  }

  static getYear() {
    return "2026";
  }
}

const a = new ABC("A");
const b = new ABC("B");

console.log(a.sayHello === b.sayHello); //instance property, different memory
console.log(a.sayBye === b.sayBye); // prototype property, same memory

console.log(ABC.getYear()); //static methods, only accesible by class itself
