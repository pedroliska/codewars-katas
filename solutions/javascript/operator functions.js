var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    operations = [['plus', '+'], ['minus', '-'], ['times', '*'], ['dividedBy', '/']];

// declare number functions
numbers.forEach(function (number, index) {
    this[number] = function (func) {
        return func ? func(index) : index;
    };
});

// declare operation functions
operations.forEach(function (operation) {
    var funcName = operation[0],
        operatorChar = operation[1];

    this[funcName] = function (right) {
        return function (left) {
            return eval(left+ operatorChar + right);
        };
    };
});
