// Write your solution in this file!
const employee = {}
    employee.name = 'Boba', 
    employee.streetAddress = '901 Westie Way'

function updateEmployeeWithKeyAndValue(employee,name, Bill) {
    const newEmployee = {...employee}
    newEmployee.name = Bill;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee.name = 'Sam';
    employee.streetAddress = '12 Broadway'
    return employee;
}

function deleteFromEmployeeByKey(employee, name, streetAddress) {
    const newEmployee = {...employee}
    newEmployee[name] = streetAddress;
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
}