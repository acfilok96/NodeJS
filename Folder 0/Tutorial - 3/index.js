const path = require('path')

const myFile = __filename
const myDir = __dirname

// console.log(path.parse(myFile))
// console.log(path.parse(myDir))

console.log(path.extname(myFile))