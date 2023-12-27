function mathOp(x, y, operation) {
    const result = operation(x, y);
    return result;
}
console.log(mathOp(10, 20, (x, y) => x + y));
console.log(mathOp(10, 20, (x, y) => x * y));
//# sourceMappingURL=main.js.map