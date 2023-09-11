// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'Project',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please give a short description of your project: ',
    },
    {
        type: 'list', //Something that lets the user select from multiple choices
        name: 'License',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input', //Something that makes npm i default maybe?
        name: 'Installation',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input', //something that makes the test default
        name: 'Test',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What does the user need to know about using this repo?',
    },
    {
        type: 'input',
        name: 'Contributions',
        message: 'What does the user need to know about contributing to the repo?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 'utf8', (error) => {
        error ? console.log(error) : console.log(`File "${fileName}" has been saved.`)
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userResponses) => {
        const reademeContent = generateMarkdown(userResponses);
        writeToFile('README.md', reademeContent);
    })
    .catch((error) => {
        console.error('Error', error);
    });
}

// Function call to initialize app
init();
