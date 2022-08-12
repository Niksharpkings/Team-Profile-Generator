const fs = require("fs");
const inquirer = require("inquirer");
const CLOG = require("./assets/js/consoleText.js");
const MQI = require("./assets/js/mqi");
const Manager = require("./lib/Manager");
const EQI = require("./assets/js/eqi");
const Engineer = require("./lib/Engineer");
const IQI = require("./assets/js/iqi");
const Intern = require("./lib/Intern");
const generatePage = require("./src/html-page-template");
const teamGenDataArr = [];
console.log(CLOG.clogIntro);
const startTeamGen = () => {
  console.log(CLOG.clogGTInq)
  return inquirer.prompt([
    {
      type: "confirm",
      name: "teamGenConfirm",
      message: "Would you like to create a team profile today?",
      validate: (validation) => {
        if (validation) {
          return true;
        }
      },
      default: true,
    },
  ]).then(answers => {
    return answers.teamGenConfirm ? addManager() : teamGenDataArr;
  })
    .catch((err) => console.error(err, " startTeamGen error"));
};

const addManager = () => {
  console.log(CLOG.clogSM);
  return inquirer
    .prompt(MQI.managerQI)
    .then((managerData) => {
      const manager = new Manager(
        managerData.managerName,
        managerData.managerID,
        managerData.managerEmail,
        managerData.managerOffice
      )
      teamGenDataArr.push(manager);
      switch (managerData.additionalRole) {
        case "Engineer":
          return addEngineer();
        case "Intern":
          return addIntern();
        case "Submit":
          return teamGenDataArr;
        default:
      }
    })
    .catch((err) => console.error(err, "addManager error"));
};

const addEngineer = () => {
  console.log(CLOG.clogTE);
  return inquirer
    .prompt(EQI.engineerQI)
    .then((engineerData) => {
      const engineer = new Engineer (
        engineerData.engineerName,
        engineerData.engineerID,
        engineerData.engineerEmail,
        engineerData.engineerGitHub
      );
      teamGenDataArr.push(engineer);
      switch (engineerData.AddAnotherEmployee) {
        case "Engineer":
          return addEngineer();
        case "Intern":
          return addIntern();
        case "Submit":
          return teamGenDataArr;
          default:
      }
    })
    .catch((err) => console.error(err));
};
const addIntern = () => {
  console.log(CLOG.clogIE);
  return inquirer
    .prompt(IQI.internQI)
    .then((internData) => {
      const intern = new Intern (
        internData.internName,
        internData.internID,
        internData.internEmail,
        internData.internSchool
      );
      teamGenDataArr.push(intern);
      switch (internData.AddAnotherEmployeeI) {
        case "Engineer":
          return addEngineer();
        case "Intern":
          return addIntern();
        case "Submit":
          return teamGenDataArr;
        default:
      }
    })
    .catch((err) => console.error(err));
};

const writeFile = writeData => {
  fs.writeFile('./dist/index.html', writeData, err => {
      if (err) {
          console.log(err);
      } else {
          console.log("Team Profile Generator Has Been Created!");
      }
  })
};

startTeamGen()
  .then(() => {
    console.log(teamGenDataArr, "num1 teamGenData");
    return generatePage(teamGenDataArr);
  })
  .then(page => {
    return writeFile(page);
  })
  .catch(err => {
  console.log(err);
});
console.log(CLOG.clogYorN);
