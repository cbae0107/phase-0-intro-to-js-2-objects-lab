const employee = {name: "Sam", streetAddress: "11 Broadway"}
function updateEmployeeWithKeyAndValue(employee,key,value){
    return {
        ...employee,
        [key]:value,
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee,key){
    return Object.assign(delete [...employee[key]]);
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    return Object.assign(employee, delete employee[key])
}