var readline = require('readline');
console.log('Welcome to Ncoder\'s Coffee Shop\n')
var rl = readline.createInterface(

    process.stdin,

    process.stdout

)

var user_name;

var enabledUser_name;

var evil_status;

var coffee_type;

var complete_order;

var Quantity;

var price;

var Answer;

var Menu = [

    {
        'Name': 'Latte',
        'Price': '9$',
        'Number': 0

    },
    {
        'Name': 'Latte with Whipped Cream',
        'Price': '12$',
        'Number': 1
    },
    {
        'Name': 'Black Coffee',
        'Price': '3$',
        'Number': 2
    },
    {
        'Name': 'Cappachino',
        'Price': '13$',
        'Number': 3
    },
    {
        'Name': 'Esprasso',
        'Price': '10$',
        'Number': 4
    },

]

//Input User_Name

rl.question('\nWhat Is Your Name..?\n\n', (usrName) => {

    user_name = usrName
    enabledUser_name = true

    user_name_check()

})

function user_name_check() {

    if (user_name == "Ben" || user_name == "Iman" || user_name == "Loki") {
        rl.question(`\nAre You Good Or Bad ${user_name}..?\n\n`, (evliStatus) => {

            if (evliStatus == "good" || evliStatus == "Good") {
                evil_status = true
            }
            else if (evliStatus == "Bad" || evliStatus == "bad") {
                evil_status = false
            }


            check_evil_status()

        })
    }
    else {

        evil_status = true
        ask_for_choice()

    }


}
function check_evil_status() {


    if (evil_status == true) {
        rl.write(`\nHello ${user_name}, Now you are welcomed here..!\n`)

        ask_for_choice()

    }

    else {
        console.error('\nYou can\'t enter to the shop\n')
        rl.close()
    }




}

function ask_for_choice() {
    console.table(Menu)

    ask()

    function ask() {
        rl.question('\nWhat Do You Want..Enter the Number of the coffee From Table..?\n\n', (coffeeType) => {

            coffee_type = parseInt(coffeeType)
            check_coffee_type()

        })
    }

}

function check_coffee_type() {

    if (coffee_type == 0 || coffee_type == '0') {
        rl.write('\nYou Have Orderd Latte\n')
        complete_order = true;
        complete()
    }
    else {
        if (coffee_type == 1 || coffee_type == '1') {
            rl.write('\nYou Have Orderd Latte With Whipped Cream\n')
            complete_order = true;
            complete()
        }
        else {
            if (coffee_type == 2 || coffee_type == '2') {
                rl.write('\nYou Have Orderd Black Coffee\n')
                complete_order = true;
                complete()
            }
            else {
                if (coffee_type == 3 || coffee_type == '3') {
                    rl.write('\nYou Have Orderd Cappachino\n')
                    complete_order = true;
                    complete()
                }
                else {
                    if (coffee_type == 4 || coffee_type == '4') {
                        rl.write('\nYou Have Orderd Esprasso\n')
                        complete_order = true;
                        complete()
                    }
                    else {
                        rl.close()
                        rl.write(`\nSorry We Don't Have That Here, ${user_name}\n`)
                        complete_order = false;
                    }
                }
            }
        }
    }






}
function complete() {
    rl.question('\nEnter The Quantity That You Want..?\n\n', (quantity) => {

        Quantity = parseInt(quantity)

        if (coffee_type == 0 || coffee_type == '0') {

            price = Quantity * 9
            rl.write('\nPrice is ' + price + '$\n')
        }
        else {
            if (coffee_type == 1 || coffee_type == '1') {

                price = Quantity * 12
                rl.write('\nPrice is ' + price + '$\n')
            }
            else {
                if (coffee_type == 2 || coffee_type == '2') {

                    price = Quantity * 3
                    rl.write('\nPrice is ' + price + '$\n')
                }
                else {
                    if (coffee_type == 3 || coffee_type == '3') {

                        price = Quantity * 13
                        rl.write('\nPrice is ' + price + '$\n')
                    }
                    else {
                        if (coffee_type == 4 || coffee_type == '4') {

                            price = Quantity * 10
                            rl.write('\nPrice is ' + price + '$\n')
                        }
                        else {
                            complete()
                        }
                    }
                }
            }
        }


        confirmOrder()

    })

}
function confirmOrder() {

    rl.question('\nIf You Want to Confirm Type y and If you want to reject type n?\n\n', (answer) => {

        Answer = answer

        if (answer == "y" || answer == "Y" || answer == "yes") {
            finishAll()
        }
        else {
            rl.write('\nYour Order Has Rejected\n')
            rl.write(`\n Thank You For Coming...See You Again ${user_name}..! \n`)
            rl.close()
        }

    })

}
function finishAll() {
    if (complete_order == true) {
        rl.write(`\n Your Order is SuccessFull, ${user_name} \n`)
        rl.write(`\n Thank You For Coming...See You Again ${user_name}..! \n`)
        rl.close()
    }
    else (
        rl.close()
    )
}