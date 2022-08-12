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
const teamGenDataArr = []; //hold all data globally
console.log(CLOG.clogIntro);
console.log(CLOG.clogTPG);
const startTeamGen = () => {//initialize team generator
  console.log(CLOG.clogGTInq)
  return inquirer.prompt([ //prompt user for team generator data
    {
      type: "confirm",
      name: "teamGenConfirm",
      message: "Would you like to create a team profile today?",
      validate: (validation) => { //validate user input
        if (validation) {
          return true;
        }
      },
      default: true,
    },
  ]).then(answers => { //if yes then lets go to the manager prompt if no then exit
    return answers.teamGenConfirm ? addManager() : teamGenDataArr;
  })
    .catch((err) => console.error(err, "startTeamGen error"));
};

const addManager = () => {//initialize adding a manager once
  console.log(CLOG.clogSM);
  return inquirer
    .prompt(MQI.managerQI) //let got to the manager prompt
    .then((managerData) => {
      const manager = new Manager( //create new manager object
        managerData.managerName, //set manager name
        managerData.managerID, //set manager id
        managerData.managerEmail, //set manager email
        managerData.managerOffice //set manager office number
      )
      teamGenDataArr.push(manager); //push manager to teamGenDataArr
      switch (managerData.additionalRole) { //switch statement to determine what to do next
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
  return inquirer //let got to the engineer prompt
    .prompt(EQI.engineerQI)
    .then((engineerData) => {
      const engineer = new Engineer ( //create new engineer object
        engineerData.engineerName, //set engineer name
        engineerData.engineerID,  //set engineer id
        engineerData.engineerEmail, //set engineer email
        engineerData.engineerGitHub //set engineer github
      );
      teamGenDataArr.push(engineer); //push engineer to teamGenDataArr
      switch (engineerData.AddAnotherEmployee) { //switch statement to determine what to do next
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
    .prompt(IQI.internQI) //let got to the intern prompt
    .then((internData) => {
      const intern = new Intern (  //create new intern object
        internData.internName, //set intern name
        internData.internID, //set intern id
        internData.internEmail, //set intern email
        internData.internSchool //set intern school
      );
      teamGenDataArr.push(intern); //push intern to teamGenDataArr
      switch (internData.AddAnotherEmployeeI) { //switch statement to determine what to do next
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

const writeFile = writeData => { //write data to file
  fs.writeFile('./dist/index.html', writeData, err => { //write data to file
      if (err) { //if error then log error
          console.log(err);
      } else { //if no error then log success
          console.log("Team Profile Generator Has Been Created!");
      }
  })
};

startTeamGen() //start team generator
  .then(() => { //once team generator is done then write data to file
    console.log(teamGenDataArr, "num1 teamGenData");
    return generatePage(teamGenDataArr); //generate page
  })
  .then(page => { //once page is generated then write data to file
    return writeFile(page); //write page to file
  })
  .catch(err => { //if error then log error
  console.log(err); 
}); //end of program
console.log(CLOG.clogYorN);
