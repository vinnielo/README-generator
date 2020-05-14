function generateMarkdown(data, image) {
  return `
![README](https://img.shields.io/badge/NODE-${data.badge}-red?style=plastic&logo=appveyor)
![License](https://img.shields.io/badge/${data.license}-100%-blue?style=plastic&logo=appveyor)

# ${data.title}

## Description

${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)vi

## Installation

To install README generator use: ${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Credits

* Name: ${data.github} 

## Tests

to test use: ${data.test}

## Questions

* Email: ${data.email} 
![profilePic](${image})

## License

Licensed under the ${data.license} license.

`;
}

module.exports = generateMarkdown;
