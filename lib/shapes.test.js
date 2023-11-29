const Circle = require('./shapes.js');
const Shapes = require('./shapes.js');

describe('Shapes', () => {
    describe('Circle', () => {
        it('Should display a circle', () => {
            const circle = new Circle();
            circle.color = "blue"
            expect(circle.render()).toEqual('<circle cx="50" cy="50" r="50" fill="blue" />');
        });
    });
})
