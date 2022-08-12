const Employee = require('../lib/Employee');//import Employee class

const employee = new Employee('NikTheEmployee', 30, 'niksharpkings@gmail.com'); // create new Employee object

test('creates an employee object', () => { // test to see if Employee object is created
    expect(employee.name)
        .toEqual(expect.any(String)); // test to see if name is a string
    expect(employee.id)
        .toEqual(expect.any(Number)); // test to see if id is a number
    expect(employee.email)
        .toEqual(expect.any(String)); // test to see if email is a string
});

test('gets employee name', () => { // test to see if getName() returns name
    expect(employee.getName())
        .toEqual(expect.stringContaining(employee.name.toString())); // test to see if getName() returns name
});

test('gets employee ID', () => { // test to see if getId() returns id
    expect(employee.getId())
        .toEqual(employee.id); // test to see if getId() returns id
});

test('gets employee email', () => { // test to see if getEmail() returns email
    expect(employee.getEmail())
        .toEqual(expect.stringContaining(employee.email.toString())); // test to see if getEmail() returns email
});

test('gets employee role', () => { // test to see if getRole() returns Employee
    expect(employee.getRole())
        .toEqual("Employee"); //  test to see if getRole() returns Employee
});