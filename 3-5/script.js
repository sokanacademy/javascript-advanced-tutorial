// JS object accessors

class Rectangle {
  #height;
  #width = 0;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
    this.color = "blue";
  }
  get area() {
    return this.#width * this.#height;
  }
  get getWidth() {
    return this.#width;
  }
  set changeHeight(h) {
    if (h > this.#width) {
      this.#height = h;
    } else {
      console.log("height must be greater than width!");
    }
  }
}

let rec = new Rectangle(30, 10);

// console.log(`Width of rectangle is: ${rec.getWidth}`);
rec.changeHeight = 9;
console.log(`Area of rectangle is: ${rec.area}`);


let rec2 = {
    height:30,
    width:10,
    get area(){
        return this.width * this.height;
    }
}

console.log(rec2.area);