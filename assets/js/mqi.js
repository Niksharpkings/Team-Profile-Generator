const managerQI = [ //inquirer questions for manager
  {
    type: "input",
    name: "managerName",
    message() {
      return`
⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙
|================================================|
|ϟ----------------- TEH MANAGER ----------------ϟ|
|ϟ==============================================ϟ|
|ϟ----| WOW!      WOW!     WOW!       WOW! |ϟ----|
|ϟ----|  Can I please have your autograph  |ϟ----|
|ϟ----|   Mr/Mrs/Ms Manager! I mean your-  |ϟ----|
|ϟ----|      First & Last Name, Please!    |ϟ----|
`
    },
    validate: (answer) => {
      if (!answer) {
        return "Please, fill out the Manager name!";
      }
      return true;
    },
    when: (input) => input.teamGenConfirm = true
  },
  {
    type: "input",
    name: "managerID",
    message(answers) {
      return `
⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘
|==================================================================>
|ϟ~~~~~~~~~~ ${answers.managerName}, The Manager ~~~~~~>
|======================================================================>
|ϟ----| ----->  What a Great Name and Title you got there!!! <----- |----ϟ|
|ϟ----|                                                             |----ϟ|
|ϟ----|        ⋙   Now, May I have your Manager ID Code:  ⋘       |----ϟ|
      `;
    },
    validate: (answer) => {
      if (!answer) {
        return `Please, fill your manager ID Code!`;
      }
      return true;
    },
    when: (input) => input.managerName !== undefined
  },
  {
    type: "input",
    name: "managerEmail",
    message(answers) {
      return `
⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘
|==================================================================>
|   ${answers.managerName}, The Manager, with a Code'd ID of ${answers.managerID}
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
    when: (input) => input.managerID !== undefined
  },
  {
    type: "input",
    name: "managerOffice",
    message(answers) {
      return `
⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜
⁜⁜========================================================
⁜⁜==== Role: Teh Manager
⁜⁜==== Name: ${answers.managerName}
⁜⁜==== CodeID: ${answers.managerID}
⁜⁜==== Email: ${answers.managerEmail}
⁜⁜========================================================
⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜
      Lastly, I need your office number, too:`},
    validate: (answer) => {
      if (!answer) {
        return "Please, input your office number!";
      }
      return true;
    },
    when: (input) => input.managerEmail !== undefined
  },
  {
    type: "list",
    name: "additionalRole",
    message(answers) {
      return `
⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜
⁜⁜========================================================
⁜⁜==== Name: ${answers.managerName}
⁜⁜==== CodeID: ${answers.managerID}
⁜⁜==== Email: ${answers.managerEmail}
⁜⁜==== GitHub: ${answers.managerSchool}
⁜⁜========================================================
⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜
⋙ Do You Want To Add An Intern Or Engineer Or Submit? ⋘
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
      return answer.managerOffice;
      }
  }
]

module.exports = {managerQI: managerQI};