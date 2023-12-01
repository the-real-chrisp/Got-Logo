const { Shapes, Circle, Rectangle, Triangle } = require('./shapes.js');

describe('Shapes', () => {
    describe('Circle', () => {
        it('Should display a circle', () => {
            const circle = new Circle();
            circle.color = "blue"
            expect(circle.render()).toEqual(`<circle cx="50" cy="50" r="100" fill="blue"/>`);
        });
    });
});
describe('Shapes', () => {
    describe('Triangle', () => {
        it('Should display a triangle', () => {
            const triangle = new Triangle();
            triangle.color = "blue"
            expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`);
        });
    });
});
describe('Shapes', () => {
    describe('Rectangle', () => {
        it('Should display a rectangle', () => {
            const rectangle = new Rectangle();
            rectangle.color = "blue"
            expect(rectangle.render()).toEqual(`<rect x="50" height="200" width="200" fill="blue"/>`);
        });
    });
});