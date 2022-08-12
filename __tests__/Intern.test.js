const Intern = require('../lib/Intern'); // import Intern class from Intern.js

const intern = new Intern('NikTheIntern', 29, 'intern.niksharpking@gmail.com', 'InternTest'); // create new Intern object

test('creates an Intern object', () => { // test to see if Intern object is created
    expect(intern.school)
        .toEqual(expect.any(String)); // test to see if school is a string
});

test('gets employee school', () => { // test to see if getSchool() returns school
    expect(intern.getSchool())
        .toEqual(expect.stringContaining(intern.school.toString())); // test to see if getSchool() returns school
});

test('gets of employee role', () => { // test to see if getRole() returns Intern
    expect(intern.getRole())
        .toEqual("Intern"); //  test to see if getRole() returns Intern
});