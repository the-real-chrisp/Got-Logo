class Shapes {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = (color)
    }
}

class Circle extends Shapes {
    constructor (color) {
        super(color)
    }
    render() {
        return `<circle cx="100" cy="100" r="100" fill="${this.color}"/>`
    }
}
class Rectangle extends Shapes {
    constructor (color) {
        super(color)
    }
    render() {
        return `<rect height="200" width="200" fill="${this.color}"/>`
    }
}
class Triangle extends Shapes {
    constructor (color) {
        super(color)
    }
    render() {
        return `<polygon points="0, 200 300, 200 150, 0" height='100%' width='100%' fill="${this.color}"/>`
    }
}

module.exports = {Shapes, Circle, Rectangle, Triangle};