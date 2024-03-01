const { sum, sub, mul, div } = require('./export');
const add = sum(5,3);
const multiply = mul(5,3);
const divded = div(5,3);
const substract = sub (5,3);
console.log(`Sum: ${add}`);
console.log(`multiply:${multiply}`);
console.log(`divided :${divded}`);
console.log(`substruction:${substract}`);