const Engineer = require('../lib/Engineer');// import Engineer class from Engineer.js

const engineer = new Engineer('NikTheEngineer', 29, 'engineer.niksharpking@gmail.com', 'EngineerTest'); // create new Engineer object

test('creates an Engineer object', () => { // test to see if Engineer object is created
    expect(engineer.github) .toEqual(expect.any(String)); // test to see if github is a string
});

test('gets engineer github value', () => { // test to see if getGithub() returns github
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString())); // test to see if getGithub() returns github
});

test('gets of employee role', () => { // test to see if getRole() returns Engineer
    expect(engineer.getRole()).toEqual("Engineer"); //  test to see if getRole() returns Engineer
});