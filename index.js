const inquirer = require('inquirer');
const fs = require('fs');
const Shapes = require('./lib/shapes')

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
        console.log(answers.textColor)
          
        // fs.writeFile('logo.svg', readMeContent, (err) =>
        //     err ? console.log(err) : console.log('Generated logo.svg')
        // )
    })