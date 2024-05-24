class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Circle with radius ${this.radius} and color ${this.color}`;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

var obj1 = new Circle(1.0, "red");

console.log(obj1.getRadius());
obj1.setRadius(2.2);
console.log(obj1.getRadius());

console.log(obj1.getColor());
obj1.setColor("blue");
console.log(obj1.getColor());

console.log(obj1.toString());

console.log(obj1.getArea());

console.log(obj1.getCircumference());

