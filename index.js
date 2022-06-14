// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title of your project?",
	},
	{
		type: "input",
		name: "description",
		message: "What is your project about?",
	},
	{
		type: "input",
		name: "installation",
		message: "How did you execute the project?",
	},
	{
		type: "input",
		name: "usage",
		message: "How would users use or access your project?",
	},
	{
		type: "list",
		name: "licenses",
		message: "Please choose the license for your project:",
		choices: ["MPL2.0", "Apache2.0", "MIT", "BSL1.0", "none"],
	},
	{
		type: "input",
		name: "contributing",
		message: "Who are your fellow contributors, if any?",
	},
	{
		type: "input",
		name: "tests",
		message: "How would you run the test for this project?",
	},
	{
		type: "input",
		name: "GitHub",
		message: "What is your GitHub username?",
	},
	{
		type: "input",
		name: "email",
		message: "What is your email address?",
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, generateMarkdown(data), (err) => {
		if (err) throw err;
		console.log("The file has been saved!");
	});
}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then((answers) => {
		writeToFile("Readme.md", answers);
	});
}

// Function call to initialize app
init();
