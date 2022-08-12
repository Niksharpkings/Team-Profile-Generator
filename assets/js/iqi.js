const internQI = [ // inquirer questions for adding an intern
  {
    type: "input",
    name: "internName",
    message() {
      return `
⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙
|================================================|
|ϟ------------ A Fresh intern, Aye! ------------ϟ|
|ϟ==============================================ϟ|
|ϟ----| Get your Note Book and Binders out |ϟ----|
|ϟ----|   Because we are extracting your   |ϟ----|
|ϟ----| schools notes out in to real life  |ϟ----|
|ϟ----|  1st Question: What is your Name!  |ϟ----|
`
    },
    validate: (answer) => {
      if (!answer) {
        return "Please, fill out the intern name!";
      }
      return true;
    }
  },
  {
    type: "input",
    name: "internID",
    message(answers) {
      return `
⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘
|==================================================================>
|ϟ~~~~~~~~ ${answers.internName}, Young-Grasshopper Intern ~~~~~~>
|======================================================================>
|ϟ----| ----->  What a Great Name and Title you got there!!! <----- |----ϟ|
|ϟ----|                                                             |----ϟ|
|ϟ----|        ⋙   Now, May I have your Intern ID Code:  ⋘       |----ϟ|
      `;
    },
    validate: (answer) => {
      if (!answer) {
        return `Please, fill your intern ID Code!`;
      }
      return true;
    },
    when(answer) {
      return answer.internName;
    }
  },
  {
    type: "input",
    name: "internEmail",
    message(answers) {
      return `
⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘
|==================================================================>
| ${answers.internName}, Noobie Internski, with a Code'd ID of ${answers.internID}
|==================================================================>
|====   Alright, Now we just need your   ====|
|====  ⋙  Email Address as well:  ⋘  ====|
`},
    validate(answer) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(answer)) {
        return `You have to provide a valid email address!`
      }
      return true
    },
    when(answer) {
      return answer.internID;
    }
  },
  {
    type: "input",
    name: "internSchool",
    message(answers) {
      return `
⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜
⁜⁜========================================================
⁜⁜==== Role: It only a Intern
⁜⁜==== Name: ${answers.internName}
⁜⁜==== CodeID: ${answers.internID}
⁜⁜==== Email: ${answers.internEmail}
⁜⁜========================================================
⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜
      Soo.. what school did you come from intern?:`
    },
    validate(answer) {
      const githubRegex = /^[a-zA-Z0-9]*$/
      if (!githubRegex.test(answer)) {
        return "You have to provide a valid school !"
      }
      return true
    },
    when(answer) {
      return answer.internEmail;
    }
  },
  {
    type: "list",
    name: "AddAnotherEmployeeI",
    message(answers) {
      return `
// ⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜
// ⁜⁜========================================================
// ⁜⁜==== Role: ☻ The Newest Intern ☻
// ⁜⁜==== Name: ${answers.internName}
// ⁜⁜==== CodeID: ${answers.internID}
// ⁜⁜==== Email: ${answers.internEmail}
// ⁜⁜==== GitHub: ${answers.internSchool}
// ⁜⁜========================================================
⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜
⋙ Who Would you Like Add An Additional Intern Or Engineer Or Submit? ⋘
⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜
`},
    choices: ["Engineer", "Intern", "Submit"],
    validate: (answer) => {
      if (!answer) {
        return "Please, select an type of role!";
      }
      return true;
    },
    when(answer) {
      return answer.internSchool;
      }
  },
]

module.exports = {internQI: internQI};