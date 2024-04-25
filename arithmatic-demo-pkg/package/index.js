function add (x, y) {
    return x + y;
}
 
function sub (x, y) {
    return x - y;
}
 
function mult (x, y) {
    return x * y;
}
 
function div (x, y) {
    if (y === 0) {
        throw new Error('Division by zero is not allowed.');
      }
    return x / y;
}

function percentage(x, y) {
    return (x / 100) * y;
}

module.exports = {
    add,
    sub,
    div,
    mult,
    percentage
}
