const index = require('../index.js')

class Shapes {
    constructor() {
        this.color = "";
    }

    setColor(color) {
        this.color = (color)
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="50" cy="50" r="100" fill="${this.color}"/>`
    }
}
class Rectangle extends Shapes {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}"/>`
    }
}
class Triangle extends Shapes {
    render() {
        return 
    }
}

module.exports = Shapes
module.exports = Circle

// `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//              <circle cx="50" cy="50" r="50" fill="${this.color}"/>
//          </svg>`