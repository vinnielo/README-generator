function generateMarkdown(data) {
  return `

![README](https://img.shields.io/badge/NODE-README-blue?style=plastic&logo=appveyor)
![License](https://img.shields.io/badge/${data.license}-100%-blue?style=plastic&logo=appveyor)

# ${data.title}

## Description

${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install README generator use: ${data.installation}

## Usage

${data.usage}


## Contributing

${data.contributing}

## Credits

Name: ${data.github} 
Email: ${data.email} 

## Tests

to test use: ${data.test}

## Questions

${data.message}



`;
}

module.exports = generateMarkdown;
