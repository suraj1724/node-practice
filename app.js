const express = require("express")
const testFunction = require("./server/example")
const validator = require("validator")
const chalk = require("chalk").default;
const app = express()
const port = 4000


// app.listen(port, ()=>{
//     console.log(`file is running on ${port}`)
// })

app.get("/", (req,res)=>{
    const data = {
        message: "This is a sample API response",
        timestamp: new Date()
    };
    const testData = testFunction(); 
    console.log(chalk.red("Server is running on port", port));
    console.log(testData, "testDataIsHere")
   res.json(testData)
    //res.json(data);
})

app.listen(port)
console.log(chalk.gray("Hello Masterblocks I am learning Node js"))
console.log(validator.isEmail("suraj@masterblocks"))
console.log(validator.isURL("https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728848#overview"))
console.log("i am console from app.js file")



