// Including packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require ('./utils/generateMarkdown');

// Creates an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
            default: 'Really Cool Project',
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
            choices: ["MIT License", "GPLv3 License", "Creative Commons License"],
            default: "MIT License",
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        }
    ]);
};    

//Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Nice work! Your README file has been generated.")
    });
}

const writeFileAsync = util.promisify(fs.writeFile);

// const writeToFile = (answers) => 
//     `# ${answers.title}
//     ${answers.description}

//     ## Installation
//     ${answers.installation}

//     ## Usage
//     ${answers.usage}
//     [${answers.title}](${answers.screenshot})

//     ## Contributing
//     ${answers.contribution}

//     ## Tests
//     ${answers.tests}

//     ## License
//     ${answers.license}
//     `;

//Function to initialize app
async function init() {
    try {
        const answers = await questions();
        console.log("Thank you! Generating your README file...");

        const markdown = generateMarkdown(answers)
        console.log(markdown);

        await writeFileAsync('README.md', markdown);

    } catch (error) {
        console.log(error);
        }
    // try{
    //     //Begin Inquirer questions
    //     questions()
    //     const answers = 

    //     //Call generateMarkdown function, save data to var
    //     const markdown = generateMarkdown(answers)
    //     console.log(markdown)

    //     .then((markdown) => writeFileAsync('README.md', markdown))
    //     // .then(() => console.log('README file successfully written!'))
    //     } 
    //     catch (error) {
    //     console.log(error);
    //     }
}

// Function call to initialize app
init();
