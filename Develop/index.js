const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//array of question objects
const questionArr = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?"
      },
      {
        type: "input",
        name: "URL to Project",
        message: "the URL to your project?"
      },
      {
        type: "input",
        name: "title",
        message: "What is your project's name?"
      },
      {
        type: "input",
        name: "description",
        message: "Please write a short description of your project"
      },
      {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"]
      },
      {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"
      },
      {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
      },
      {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
      },
      {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
      }
];

function writeToFile(fileName, data) {
    //expected arguments is path and data
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

function startGeneratingReadMe() {
    inquirer.prompt(questionArr).then((answers) => {
        writeToFile("README.md", generateMarkdown({ ...answers }));
    });
}

startGeneratingReadMe();
