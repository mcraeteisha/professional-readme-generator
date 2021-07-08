// Function returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license !== '') {
    return `https://img.shields.io/github/license/${data.github}/${data.repo}`
  }
  else {
    return '';
  }
}

// Function returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (data.license !== '') {
    return `https://api.github.com/licenses/${data.license}`
  }
  else {
    return '';
  }
}

// Function returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (data.license !== '') {
    renderLicenseBadge();
    renderLicenseLink();
  }
  else {
    return '';
  }
}

// Function generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)

  ## Installation 💻
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Screenshots 📸
  [Application Screenshot](${data.screenshot})

  ## Questions?
  For questions regarding this project, please contact me at ${data.email}. You can also message me on GitHub at [${data.github}](https://github.com/${data.github}).

  ## License
  This application is covered by the ${data.license}.`
;
}

module.exports = generateMarkdown;
