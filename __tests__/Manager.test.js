const Manager = require('../lib/Manager'); // import Manager class from Manager.js

const manager = new Manager('NiktheManager', 32, 'manager.niksharpkings@gmail', 555); // create new Manager object

test('this will create a Manager object', () => { // test to see if Manager object is created
    expect(manager.officeNumber).toEqual(expect.any(Number)); // test to see if officeNumber is a number
});

test('this test get the Manager role', () => { // test to see if getRole() returns Manager
    expect(manager.getRole()).toEqual("Manager"); // test to see if getRole() returns Manager
});