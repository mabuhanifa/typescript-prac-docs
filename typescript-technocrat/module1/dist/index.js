"use strict";
var str = "Hello World";
var arr = [1, 2, 3, 4, 5];
var _a = arr.map(function (a) { return a * 2; }), log = _a[0], rest = _a.slice(1);
console.log(log);
