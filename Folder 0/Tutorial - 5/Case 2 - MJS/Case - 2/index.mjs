/*
Node's Own Module:
1. CJS = Common JS | For example: for export work, module.exports & for import work, require(" ")
2. ES6 or ESM =  ECMA Script Module | For example: import & export
3. MJS = Module JS | For example: index.mjs, app.mjs / import, export
*/

// Example of MJS
// 1. 
import {x,y} from "./app.mjs"
console.log(x);
console.log(y);

// 2.
// import {y} from "./app.mjs"
// console.log(y);