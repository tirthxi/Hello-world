function calculator(a, b, operator) {
    switch(operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return "Invalid operator";
    }
}

console.log(calculator(10, 5, '+')); // 15
console.log(calculator(10, 5, '*')); // 50
