const path = require("path")

const filePath = "/home/users/document/abc.txt"

// const dirName = path.dirname(filePath)
// console.log(`Directory Name: ${dirName}`)

// const fileName = path.basename(filePath)
// console.log(`File Name: ${fileName}`)

// const fileExtension = path.extname(filePath)
// console.log(`File Extension: ${fileExtension}`)

// const currDir = __dirname;
// const newFolder = "Video"
// const filePathNew = path.join(currDir, newFolder, "data.csv")
// console.log(filePathNew) 

const configPath = path.resolve("ding.json")
console.log(configPath)