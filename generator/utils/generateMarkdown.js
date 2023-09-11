// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Project}

## Description
${data.Description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To install the project dependencies, run the following command:

${data.Installation}


## Usage
${data.Usage}

## License
${renderLicenseBadge(data.License)}

This project is licensed under the ${data.License} license. [Learn more](${renderLicenseLink(data.License)})

## Contributions
${data.Contributions}

## Tests
To run tests, use the following command:

${data.Test}


## Questions
If you have any questions or need further assistance, please contact me at [GitHub](https://github.com/${data.Username}) or via email at ${data.Email}.

`;
}

module.exports = generateMarkdown;
