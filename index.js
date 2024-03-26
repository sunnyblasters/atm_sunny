#! /usr/bin/env node
import inquirer from "inquirer";
let client_balance = 50000;
let clientPinCode = 54321;
console.log(`your current balance is: ${client_balance} , and your pin is: ${clientPinCode}`);
let answer = await inquirer.prompt([
    {
        name: 'pinCode',
        message: 'Enter Your Pin number',
        type: 'number',
    },
]);
if (clientPinCode === answer.pinCode) {
    let aa = await inquirer.prompt([
        {
            message: 'Please Select one Option',
            type: 'list',
            name: 'operation',
            choices: ['check balance', 'cash withdraw']
        }
    ]);
    if (aa.operation === 'check balance') {
        console.log(client_balance);
    }
    else if (aa.operation === 'cash withdraw') {
        let answer = await inquirer.prompt([
            {
                message: 'Please Enter Your Amount',
                type: 'number',
                name: 'cash',
            }
        ]);
        if (true) {
            client_balance -= answer.cash;
            console.log('Your curent balance is :' + client_balance);
        }
    }
}
else {
    console.log('please enter a right pin');
}
