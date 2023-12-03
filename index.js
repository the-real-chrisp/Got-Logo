const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Rectangle, Triangle } = require('./lib/shapes');

class Svg {
    constructor() {}

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shape}${this.text}</svg>`
    }

    createText(text, textColor) {
        this.text = `<text x='50%' y='55%' font-size='60' text-anchor='middle' fill='${textColor}'>${text}</text>`
    }

    createShape(shape) {
        this.shape = shape.render()
    }
}

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please enter three characters e.g. THX, CJP, etc...'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter a color keyword or hexadecimal numberfor your TEXT e.g. blue or #0000FF'
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter a color keyword or hexadecimal number for your SHAPE e.g. blue or #0000FF'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape for your logo:',
            choices: ['Circle', 'Triangle', 'Rectangle']
        }
    ])
    .then((answers) => {
        console.log(answers)
        const svg = new Svg();
        let shape;
        let svgString = ""
        svg.createText(answers.text, answers.textColor);
        if (answers.shape === 'Circle') {
            shape = new Circle(answers.shapeColor)
        } else if (answers.shape === 'Triangle') {
            shape = new Triangle(answers.shapeColor)
        } else if (answers.shape === 'Rectangle') {
            shape = new Rectangle(answers.shapeColor)
        }
        svg.createShape(shape)
        svgString = svg.render();

        console.log(svg)
        console.log(svgString)

        fs.writeFile('logo.svg', svgString, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg!')
        )
    })