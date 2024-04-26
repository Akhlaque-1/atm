import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 4321;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operation = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fastcash"]
        }
    ]);
    console.log(operation);
    if (operation.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        // =, -=, +=
        if (amountAns.amount > myBalance) {
            console.log("you have insufficient balance");
        }
        else if (myBalance -= amountAns.amount) {
            console.log(`your remaining amount is: ${myBalance}`);
        }
    }
    else if (operation.operation === "check balance") {
        console.log(`your balance is: ${myBalance}`);
    }
    if (operation.operation === "fastcash") {
        let cash = await inquirer.prompt([
            {
                name: "options",
                message: "select any amount",
                type: "list",
                choices: ["1000", "2000", "3000", "5000"],
            }
        ]);
        if (myBalance -= cash.options) {
            console.log(`your remaining amount is: ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect pin number");
}
