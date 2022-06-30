const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

teamArray = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            // Question #1 - Manager Name
            type: "input",
            name: "managerName",
            message: "Enter manager's name:",


        },

        {
            type: "input",
            name: "id",
            message: "Enter manager's id:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter manager's email:",
        },
        {
            type: "input",
            name: "officeNum",
            message: "Enter manager's office number:",
        }


    ])
}


const addTeamMember = () => {
    return (
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "nextSteps",
                    message: "Choose next step",
                    choices: ["Add engineer", "Add intern", "Finished"],
                },
            ])
            .then((input) => {
                if (input.nextSteps === "Add engineer") {
                    createEngineer();
                } else if (input.nextSteps === "Add intern") {
                    createIntern();
                } else if (input.nextSteps === "Finished") {
                    finalPrompt();
                }
            })

    )
};


createEngineer = () => {
    return (
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter name",
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter id",
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter email",
                },
                {
                    type: "input",
                    name: "github",
                    message: "Enter github",
                },
            ])
            .then((input) => {
                const engineer = new Engineer({
                    name: input.name,
                    id: input.id,
                    email: input.email,
                    github: input.github,
                });
                teamArray.push(engineer);
                addTeamMember();
            })
    )
}


createIntern = () => {
    return (
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter name",
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter id",
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter email",
                },
                {
                    type: "input",
                    name: "school",
                    message: "Enter school",
                },
            ])
            .then((input) => {
                const intern = new Intern({
                    name: input.name,
                    id: input.id,
                    email: input.email,
                    school: input.school
                });
                teamArray.push(intern);
                addTeamMember();
            })
    )
}

const finalPrompt = (answers) => {
    console.log("Generating a file....");
    console.log("Done! Check index.html under the dist folder.");
    console.log(teamArray[0]);
    // console.log(
    //     "This is the team data for your HTML file",

    //     answers
    // );

    // return writeFile(answers);
};

promptUser().then((answers) => {
    console.log(answers);
    addTeamMember();
});

