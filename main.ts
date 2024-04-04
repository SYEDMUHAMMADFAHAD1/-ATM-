#! /usr/bin/env node

import inquirer from "inquirer";
  let myBalance: number = 50000; //dollars
  let pinCode: number = 41920; //password

  //print a message
  console.log("----------------welcome to Alflah ATM-------------");

  let pinAnswer = await inquirer.prompt([
    {
      name: "pin",
      type: "number",
      message: "Enter your pin",
    },
  ]);

  if (pinAnswer.pin === pinCode) {
    console.log("Your Pin is correct, login successfully");
    console.log(`Current account balance is ${myBalance}`);

    let operatorAns = await inquirer.prompt([
      {
        name: "operation",
        type: "list",
        message: "Please select operation",
        choices: ["withdraw", "check balance", "fast_cash", "exit"], // Fixed typo here
      },
    ]);

    if (operatorAns.operation === "withdraw") {
      let amountAns = await inquirer.prompt([
        {
          name: "amount",
          type: "number",
          message: "Enter the amount to withdraw",
        },
      ]);

      if (amountAns.amount > myBalance) {
        console.log("Insufficient balance");
      } else {
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} withdrawn successfully`);
        console.log(`Your Account Balance is ${myBalance}`);
      }
    } else if (operatorAns.operation === "fast_cash") {
      // Fixed typo here
      let fastCashAnswers = await inquirer.prompt([
        {
          type: "list",
          name: "fast_amount",
          message: "select the amount you want to cash:",
          choices: [500, 1000, 5000],
        },
      ]);

      if (fastCashAnswers.fast_amount <= myBalance) {
        myBalance -= fastCashAnswers.fast_amount;
        console.log(`Your remaining balance is ${myBalance}`);
      } else {
        console.log("Insufficient balance");
      }
    } else if (operatorAns.operation === "check balance") {
      console.log(`Your Account Balance is: ${myBalance}`);
    }
  } else {
    console.log("Pin is incorrect");
  }



