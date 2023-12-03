const {Circle, Rectangle, Triangle } = require('./shapes.js');

describe('Shapes', () => {
    describe('Circle', () => {
        it('Should display a circle', () => {
            const circle = new Circle();
            circle.color = "blue"
            expect(circle.render()).toEqual(`<circle cx="100" cy="100" r="100" fill="blue"/>`);
        });
    });
});
describe('Shapes', () => {
    describe('Triangle', () => {
        it('Should display a triangle', () => {
            const triangle = new Triangle();
            triangle.color = "blue"
            expect(triangle.render()).toEqual(`<polygon points="0, 200 300, 200 150, 0" height='100%' width='100%' fill="blue"/>`);
        });
    });
});
describe('Shapes', () => {
    describe('Rectangle', () => {
        it('Should display a rectangle', () => {
            const rectangle = new Rectangle();
            rectangle.color = "blue"
            expect(rectangle.render()).toEqual(`<rect height="200" width="200" fill="blue"/>`);
        });
    });
});