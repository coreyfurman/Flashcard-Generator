
var BasicCard = require("./BasicCard");
var inquirer = require('inquirer');

var CreateCard = new BasicCard();

inquirer.prompt([
        {
            type: "checkbox",
            message: "Which type of flashcard would you like to create?",
            choices: ["BasicCard", "ClozeCard"],
            name: "cardType"
        }
    ]).then(function(user) {
            if (user.cardType == "BasicCard") {
                
                inquirer.prompt([{
                    type: "input",
                    message: "What should the front of the card say?",
                    name: "front"
                }, {
                    type: "input",
                    message: "What should the back of the card say?",
                    name: "back"
                }]).then(function(user) {

                    console.log(JSON.stringify(user, null, 2));

                    var front = user.front;
                    var back = user.back;
                    console.log(front);
                    console.log(back);

                    CreateCard.newBasicCard(front, back);
                });
            } else {
                
                inquirer.prompt([{
                    type: "input",
                    message: "What will the full text?",
                    name: "full"
                }, {
                    type: "input",
                    message: "What will the cloze part be?",
                    name: "cloze"
                }]).then(function(user) {
                        console.log(JSON.stringify(user, null, 2));

                        var full = user.full;
                        var cloze = user.cloze;
                        console.log(full);
                        console.log(cloze);

                        CreateCard.newBasicCard(full, cloze);
                    }
                });