//Function that returns a license badge based on which license is passed in
// and returns and empty string if there is no license
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`  
  }
  return ""
}

//Function that returns the license link
//and returns an empty string if no license link
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [license](#license)\n`
  }
  return ""
}

// Function that returns the license section of README
// and returns an empty string if no license
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## license
    this project is licensed by ${license}`
  }
  return ""
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ***
  
  ## Description
  ${data.description}

  # Table of Contents
  *[Installation](#Installation)
  *[Tests](#Tests)
  *[Usage](#Usage)
  *[Contributing](#Contributing)

  ## License
  ${data.license}
  ## Installation
  ${data.dependencies}
  ## Tests
  ${data.runTests}
  ## Usage:
  ${data.using}
  ## Contributing:
  ${data.contributing}

  ***

  # Questions
  ## Github Profile
  https://github.com/${data.username}
  ## Email
  ${data.email}

  ***

  #### Please email me with any additional questions!!

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
