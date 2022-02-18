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
    this project is licensed ${license}`
  }
  return ""
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Username
  ${data.username}
  ## Email
  ${data.email}
  ## Title
  ${data.title}
  ## License
  ${data.license}
  ### Installation
  ${data.dependencies}
  ### Tests
  ${data.runTests}
  ### Using the repo:
  ${data.using}
  ### Contributing to the repo:
  ${data.contributing}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
