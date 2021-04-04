// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
            default: 'Really Cool Project'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is your project description?',
        },
        {   
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
        },
        {   
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for project use.',
        },
        { 
            type: 'input',
            name: 'screenshot',
            message: 'A good README file should have a screenshot. Please add a screenshot URL here:',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the contribution guidelines for your project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are the test instructions for your project?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your application:',
            choices: ['default', 'MIT License', 'Apache License', 'GNU GPLv3', 'ISC License'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        }
    ]);

// TODO: Create a function to write README file
const writeToFile = (answers) => 
    ``

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
