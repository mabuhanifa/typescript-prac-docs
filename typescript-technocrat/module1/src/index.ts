const str: string = "Hello World";
const arr = [1, 2, 3, 4, 5];
const [log, ...rest] = arr.map((a) => a * 2);
console.log(log);
