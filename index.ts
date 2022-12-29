#! /usr/bin/env node

import inquirer from "inquirer";

(
    async () => {
        
            const userInput: { userId: string, userPin: string } = await inquirer.prompt([
                {
                    name: "userId",
                    message: "Enter your User ID:",
                    type: "input"
                },
                {
                    name: "userPin",
                    message: "Enter your Pin Number:",
                    type: "password"
                }
            ])
            // console.log("User ID:", userInput.userId);
            // console.log("User Pin:", userInput.userPin);

            const userData = {
                userId: userInput.userId,
                userPin: userInput.userPin,
                amount: Math.floor(Math.random() * 100000 + 1)
            }
            // console.log(userData);
            const selectedOpt: { options: "cash withdrawl" | "exist" } = await inquirer.prompt([
                {
                    name: "options",
                    message: "Select Any Option",
                    type: "list",
                    choices: ["cash withdrawl", "exist"]
                },
            ])

            if (selectedOpt.options === "cash withdrawl") {
                console.log("Your Current Amount: ", userData.amount)
                const enteredAmount: { amount: number } = await inquirer.prompt([
                    {
                        message: "Enter your Amount",
                        name: "amount",
                        type: "number",
                        validate: (input) => {
                            if (input > userData.amount) {
                                return "Insufficient Balance"
                            }
                            else {
                                return true
                            }
                        }
                    }
                ]);
                userData.amount -= enteredAmount.amount
                console.log("Amount After WithDrawl: ", userData.amount);

            }
        }
    
)()