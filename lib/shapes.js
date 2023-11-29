const index = require('../index.js')

class Shapes {
    constructor() {
        this.color = "";
    }

    setColor() {
        this.color = textColor.answer;
    } 
}

class Circle extends Shapes {
    render() {
        return '<circle cx="50" cy="50" r="50" fill="blue" />'
    }
}

module.exports = Shapes
module.exports = Circle

// `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//              <circle cx="50" cy="50" r="50" fill="${this.color}"/>
//          </svg>`