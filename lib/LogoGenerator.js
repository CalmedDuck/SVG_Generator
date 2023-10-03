const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./shapes.js');

const shapes = {
    Circle: Circle,
    Triangle: Triangle,
    Square: Square,
};
async function generateLogo() {
    const questions = [
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
            validate: input => input.length <= 3
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color:',
        },
    ];

    const answers = await inquirer.prompt(questions);
    const ShapeClass = shapes[answers.shape];
    const shape = new ShapeClass(answers.shapeColor);
    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="150" y="100" font-size="30" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
        </svg>`;

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
}

module.exports = generateLogo;