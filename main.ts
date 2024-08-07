#! usr/bin/

import inquirer from "inquirer";

let todo = []
let condition = true;

while (condition) {
    let todolist = await inquirer.prompt(
        [
            {
                name: "todo1",
                type: "input",
                message: "what would you like to add in your todo list?",
            }, {
                name: "todo2",
                type: "confirm",
                message: "would you like  to add more in your todo list?",
                default: "true",
            }
        ]
    )
    
    todo.push(todolist.todo1);
    condition = todolist.todo2;
    console.log(todo);
}
