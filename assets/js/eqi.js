const engineerQI = [ // inquirer Engineer questions
  {
    type: "input",
    name: "engineerName",
    message() {
      return`
⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙
|================================================|
|ϟ----------------- An Engineer ----------------ϟ|
|ϟ==============================================ϟ|
|ϟ----| WOW!      WOW!     WOW!       WOW! |ϟ----|
|ϟ----|  Can you build me your engine      |ϟ----|
|ϟ----|   with some data input of your-    |ϟ----|
|ϟ----|      First & Last Name, Please!    |ϟ----|
`
    },
    validate: (answer) => {
      if (!answer) {
        return "Please, fill out the Engineer name!";
      }
      return true;
    }
  },
  {
    type: "input",
    name: "engineerID",
    message(answers) {
      return `
⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘
|==================================================================>
|ϟ~~~~~~~~~~ ${answers.engineerName}, Master Engineer ~~~~~~>
|======================================================================>
|ϟ----| ----->  What a Great Name and Title you got there!!! <----- |----ϟ|
|ϟ----|                                                             |----ϟ|
|ϟ----|        ⋙   Now, May I have your Engineer ID Code:  ⋘       |----ϟ|
      `;
    },
    validate: (answer) => {
      if (!answer) {
        return `Please, fill your Engineer ID Code!`;
      }
      return true;
    },
    when(answer) {
      return answer.engineerName;
      }
  },
  {
    type: "input",
    name: "engineerEmail",
    message(answers) {
      return `
⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘
|==================================================================>
| ${answers.engineerName}, An Engineerstr, with a Code'd ID of ${answers.engineerID}
|==================================================================>
|====   Great, Now we just need your   ====|
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
      return answer.engineerID;
      }
  },
  {
    type: "input",
    name: "engineerGitHub",
    message(answers) {
      return `
⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜
⁜⁜========================================================
⁜⁜==== Role: Teh Engineer
⁜⁜==== Name: ${answers.engineerName}
⁜⁜==== CodeID: ${answers.engineerID}
⁜⁜==== Email: ${answers.engineerEmail}
⁜⁜========================================================
⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜
      Enter employee's GitHub username:`
    },
validate(answer) {
  const githubRegex = /^[a-zA-Z0-9]*$/
  if (!githubRegex.test(answer)) {
    return "You have to provide a valid GitHub username!"
  }
  return true
},
when(answer) {
  return answer.engineerEmail;
  }
  },
  {
    type: "list",
    name: "AddAnotherEmployee",
    message(answers) {
      return `
// ⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜
// ⁜⁜========================================================
// ⁜⁜==== Role: ☻ Teh Great Engineer ☻
// ⁜⁜==== Name: ${answers.engineerName}
// ⁜⁜==== CodeID: ${answers.engineerID}
// ⁜⁜==== Email: ${answers.engineerEmail}
// ⁜⁜==== GitHub: ${answers.engineerGitHub}
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
      return answer.engineerGitHub;
      }
  },
]

module.exports = {engineerQI: engineerQI};