class Shapes {
    constructor() {
        this.color = "";
    }

    setColor(color) {
        this.color = color;
    } 
}

class Circle extends Shapes {
    render() {
       return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="${this.color}"/>
        </svg>`
    }
}

module.exports = Circle