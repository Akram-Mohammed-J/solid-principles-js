// https://newsletter.ashishps.com/i/142656403/o-openclosed-principle-ocp

class Shape {
  calculateArea() {
    throw new Error("calculate Area need to be implemented");
  }
  calculatePerimeter() {
    throw new Error("calculate Area need to be implemented");
  }
}

class Rectangle extends Shape {
  constructor(witdth, height) {
    super();
    this.height = height;
    this.witdth = witdth;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Circle extends Shape {
  constructor(radius) {
    console.log(super());
    this.radius = radius;
  }

  calculateArea() {
    return 3.14 * this.radius ** 2;
  }

  calculatePerimeter() {
    return 2 * 3.14 * this.radius;
  }
}
