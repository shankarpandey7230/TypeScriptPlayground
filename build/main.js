"use strict";
// // // let awesomeName: string = 'shakeAndBake';
// // // awesomeName = 'something';
// // // awesomeName = awesomeName.toUpperCase();
// // // // awesome = 2;
// // // console.log(awesomeName);
const employee = getEmployee();
console.log(employee);
function getEmployee() {
    const random = Math.random();
    if (random < 0.33) {
        return {
            name: 'john',
        };
    }
    else if (random < 0.66) {
        return {
            name: 'sarah',
            dogName: 'Rex',
        };
    }
    else {
        return {
            name: 'bob',
            managePeople: () => console.log('Managing people...'),
            delegateTasks: () => console.log('Delegating tasks...'),
        };
    }
}
// challenge 2 
function isManager(obj) {
    return 'managePeople' in obj;
}
;
// console.log(isManager(employee))
if (isManager(employee)) {
    employee.delegateTasks();
}
