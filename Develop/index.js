const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");

//array of question objects
const questionArr = [
    {
        type: "input",
        name: "github",
        message: "What's your GitHub username?"
      },
      {
        type: "input",
        name: "email",
        message: "What's your email?"
      },
      {
        type: "input",
        name: "URL to Project",
        message: "What is the URL to your project?"
      },
      {
        type: "input",
        name: "title",
        message: "What the title of your project?"
      },
      {
        type: "input",
        name: "description",
        message: "Please write a short description of your project."
      },
      {
        type: "list",
        name: "license",
        message: "What licenses are you using?",
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
      },
      {
        type: "input",
        name: "badge",
        message: "What does your badge need to say?"
      }
];

function writeToFile(fileName, data) {
    //expected arguments is path and data
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

function startGeneratingReadMe() {
    // pushes data over to the markdown to create README
    inquirer.prompt(questionArr).then((answers) => {
        const queryURl = `https://api.github.com/users/${answers.github}`; 
        axios.get(queryURl).then((res) => {
        const imgUrl = res.data.avatar_url;
        
        writeToFile("README.md", generateMarkdown({ ...answers }, imgUrl));
        });
    });
}

// executes the generateReadMe
startGeneratingReadMe();
