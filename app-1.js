// STRING REPLACE
const replaceString = () => {
    // $& - reprezentuje pasujacy pattern
    // $` - reprezentuje to co znajduje sie przed pasujacym patternem
    // $' - reprezentuje to co znajduje sie po pasujacym patternie

    const expression = 'Today is a great day';

    console.log(expression.replace(/great/, '$& $&'))
    console.log(expression.replace(/great/, '$& $& $&'))
    console.log(expression.replace(/great/, "$' $&"))
    console.log(expression.replace(/great/, "$& $`"));
};
// replaceString();

// REGEXP NAMED CAPTURE GROUPS
const regexpCaptureGroups = () => {
    // const regex = /([A-Z][a-z]+) ([A-Z][a-z]+) (\d+)/
    const regex = /(?<name>[A-Z][a-z]+) (?<surname>[A-Z][a-z]+) (?<age>\d+)/
    const result = regex.exec('John Smith 32');
    const {
        groups: {name, surname, age}
    } = result;
    console.log(`${name} ... ${surname} ... ${age}`);
};
// regexpCaptureGroups();

// FALSY FILTER
const filterFalsy = () => {
    const elements = [10, '', undefined, 20, null, 30]
    const filteredElements = elements.filter(Boolean);
    console.log(filteredElements);


    const numbersAsStr = ['11', '22', '33'];
    console.log(numbersAsStr.map(Number).map(x => x + 1));
}
// filterFalsy();

// MANY CONDITIONS CHECK
const checkManyConditions = () => {
    const userColor = 'red';

    if (userColor === 'red' || userColor === 'green' || userColor === 'blue') {
        console.log('OK 1')
    }

    if (['red', 'green', 'blue'].includes(userColor)) {
        console.log('OK 2')
    }
}
// checkManyConditions();

// REQUIRED FUNCTION PARAMETERS
const requiredParametersFunction = () => {
    try {
        const requiredParam = () => {
            throw new TypeError('missing parameter');
        };
        const square = (x = requiredParam()) => x ** 2;
        console.log(square(10));
        console.log(square());
    } catch (e) {
        console.log(e.message);
    }
}
requiredParametersFunction();
