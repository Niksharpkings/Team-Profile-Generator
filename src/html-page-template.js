// export function to generate entire page
// const teamArray = require('../index.js');
// theTeamArray
// console.log(templateData, "templateData + 1");
// const {teamGenDataArr, ...header} = templateData;
// console.log(templateData, "templateData + 2");
// console.log(header, "header + 1");

const bodyTemplate = function (templateData) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/css/bootstrap.min.css"
    integrity="sha512-XWTTruHZEYJsxV3W/lSXG1n3Q39YIWOstqvmFsdNEEQfHoZ6vm6E9GK2OrF6DSJSpIbRbi+Nn0WDPID9O7xB2Q=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer" />
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
    integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer" />
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
    <div class="bg-primary text-center py-4">
        <h1 class="text-dark">
        My Newly Profiled Team
        </h1>
    </div>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">
        My Team
        </h1>
        </div>
        <nav class="flex-row">
        <div class="container">
        <div id="team-members" class="row justify-content-center">
        ${templateData}
      </div>
      </div>
      </nav>
    </header>
    <main class="container">
    <div id="team-members" class="row justify-content-center">
    </div>
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">
      &copy; ${new Date().getFullYear()} by
      </h3>
    </footer>
    <script
src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
crossorigin="anonymous"
referrerpolicy="no-referrer"></script>
<script
src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js"
integrity="sha512-2rNj2KJ+D8s1ceNasTIex6z4HWyOnEYLVC3FigGOmyQCZc2eBXKgOxQmo3oKLHyfcj53uz4QMsRCWNbLd32Q1g=="
crossorigin="anonymous"
referrerpolicy="no-referrer"></script>
<script
src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/js/bootstrap.min.js"
integrity="sha512-8Y8eGK92dzouwpROIppwr+0kPauu0qqtnzZZNEF8Pat5tuRNJxJXCkbQfJ0HlUG3y1HB3z18CSKmUo7i2zcPpg=="
crossorigin="anonymous"
referrerpolicy="no-referrer">
</script>

  </body>
  </html>
  `
}

const genManagerCard = function (manager) {
  return `
  <div class="col-4 mt-1">
      <div class="card">
          <div class="bg-danger card-header text-dark">
          <h1>
          <i class="fa-solid fa-user-tie mr-4"></i>
          &nbsp;Manager
          </h1>
              <h2>
              ${manager.name}
              </h1>
          </div>
          <div class="p-2 bg-dark">
              <ul class="list-group list-group-flush card my-2">
                  <li class="list-group-item">
                  ID: ${manager.id}
                  </li>
                  <li class="list-group-item">
                  Email:
                  <a href="mailto:${manager.email}">
                  ${manager.email}
                  </a>
                  </li>
                  <li class="list-group-item">
                  Office number: ${manager.officeNumber}
                  </li>
              </ul>
          </div>
      </div>
  </div>
  `;
}

const genEngineerCard = function (engineer) {
  return `
  <div class="col-4 mt-1">
      <div class="card">
          <div class="bg-warning card-header text-dark">
          <h1><i class="fa-solid fa-user-gear mr-4"></i>
          &nbsp;Engineer
          </h1>
              <h2>
              ${engineer.name}
              </h2>
          </div>
          <div class="p-2 bg-dark">
              <ul class="list-group list-group-flush card my-2">
                  <li class="list-group-item">
                  ID: ${engineer.id}
                  </li>
                  <li class="list-group-item">
                  Email:
                  <a href="mailto:${engineer.email}">
                  ${engineer.email}
                  </a>
                  </li>
                  <li class="list-group-item">
                  GitHub:
                  <a href="https://github.com/${engineer.github}">
                  ${engineer.github}
                  </a>
                  </li>
              </ul>
          </div>
      </div>
  </div>
  `;
}

const genInternCard = function (intern) {
  return `
  <div class="col-4 mt-1">
      <div class="card">
          <div class="bg-success card-header text-dark">
          <h1><i class="fa-solid fa-school mr-4"></i>
          Intern
          </h1>
          <h2>
          ${intern.name}
          </h2>
          </div>
          <div class="p-2 bg-dark">
              <ul class="list-group list-group-flush card my-2">
                  <li class="list-group-item">
                  ID: ${intern.id}
                  </li>
                  <li class="list-group-item">
                  Email:
                  <a href="mailto:${intern.email}">
                  ${intern.email}</a>
                  </li>
                  <li class="list-group-item">
                  School: ${intern.school}
                  </li>
              </ul>
          </div>
      </div>
  </div>
  `;
}
const generatePage = (writeData) => {
  const cardArray = [];

  for (const employee of writeData) {
    const role = employee.getRole();
    if (role === "Manager") {
      cardArray.push(genManagerCard(employee));
    } else if (role === "Engineer") {
      cardArray.push(genEngineerCard(employee));
    } else if (role === "Intern") {
      cardArray.push(genInternCard(employee));
    }
  }

  const employeeCards = cardArray.join('');
  return  bodyTemplate(employeeCards);
}

module.exports = generatePage;
