// Write your solution in this file!
const employee = {
    Name: "Sam",
    streetAddress: '11 Broadway'
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const employee2 = {...employee, streetAddress: '11 Broadway'}
    return employee2
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee[key] = value
        return obj
}
function deleteFromEmployeeByKey(obj, key) {
    const newEmployee = {...employee}

        delete newEmployee[key];
        // delete newEmployee.Name;
        // delete employee3.streetAddress;

    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(obj, key) {
//    employee[Name] = ''
        delete employee[key]
    return employee
}
