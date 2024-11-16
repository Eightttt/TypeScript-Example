// Define Shape interface
interface Shape {
    calculateArea(): number; // Method to calculate area
}

// Implement Rectangle class
class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    calculateArea(): number {
        return this.width * this.height; // Area calculation for rectangle
    }
}

// Implement Circle class
class Circle implements Shape {
    constructor(private radius: number) {}

    calculateArea(): number {
        return Math.PI * this.radius * this.radius; // Area calculation for circle
    }
}

// Use classes to calculate areas
const shapes: Shape[] = []; // Array to hold different shapes

// Add rectangle to shape array
const rectangle = new Rectangle(5, 10);
shapes.push(rectangle);

// Add circle to shape array
const circle = new Circle(7);
shapes.push(circle);

// Calculate and display areas of all shapes
shapes.forEach(shape => {
    console.log(`Area: ${shape.calculateArea().toFixed(2)}`);
});



