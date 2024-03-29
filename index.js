#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessnumber",
        type: "number",
        message: "Please guess a number between 1 to 5",
    },
]);
if (answers.userguessnumber === randomnumber) {
    console.log("congratulation you guess write number");
}
else {
    console.log("you guess a wrong number");
}
console.log("The Answer is : " + randomnumber);
