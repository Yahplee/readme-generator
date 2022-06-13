// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	license === "none"
		? ""
		: `![license badge](https://img.shields.io/badge/license-${license}-brightgreen)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	license === "none" ? "" : `* [License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	license === "none"
		? ""
		: `## License
  
  This project is nested under the following license: ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `# ${data.title}

  
`;
}

module.exports = generateMarkdown;
