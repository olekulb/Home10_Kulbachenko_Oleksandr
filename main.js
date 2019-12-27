//HW-10 JavaScript Kulbachenko Oleksandr


//Adding
function sum (a, b) {
    return a+b;
}
console.log('The adding of numbers: ' + sum(5, 6));

//subtraction
function sub (a, b) {
    return a-b;
}
console.log('The difference of numbers: ' + sub(5, 6));

//multiplication
function mult (a, b) {
    return a*b;
}
console.log('The multiplication of numbers: ' + mult(5, 6));

//dividing
function divid (a, b) {
    return a/b;
}
console.log('The dividing of numbers: ' + divid(5, 6));

//exponentation
function expon (a, b) {
    let res=1;
    let i=1;
    if (b !== 0) {
        while (i<=b) {
            res = res*a;
            i += 1;
        }
    }
    return res;
}
console.log('The exponentation of number: ' + expon(5, 6));

//root
function sqRoot (a) {
    return Math.sqrt(a);
}
console.log('The root of number: ' + sqRoot(5));

//cosine
function cosine (a) {
    return Math.cos(a);
}
console.log('The cosine of number: ' + cosine(5));

//sine
function sine (a) {
    return Math.sin(a);
}
console.log('The sine of number: ' + sine(5));

//factorial
function fact (a) {
    let res=1;
    if (a===0) {
        res=0;
    } else {
        for (let i=1; i<=a; i++) {
            res=res*i;
        }
    }
    return res;
}
console.log('The factorial of number: ' + fact(5));