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

rl.question('What Is Your Name..?\n\n', (usrName) => {

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
        console.log(`Hello ${user_name}, Now you are welcomed here..!`)

        ask_for_choice()

    }

    else {
        console.error('You can\'t enter to the shop')
        rl.close()
    }




}

function ask_for_choice() {
    console.table(Menu)

    ask()

    function ask() {
        rl.question('What Do You Want..Enter the Number of the coffee From Table..?\n\n', (coffeeType) => {

            coffee_type = parseInt(coffeeType)
            check_coffee_type()

        })
    }

}

function check_coffee_type() {

    if (coffee_type == 0 || coffee_type == '0') {
        console.log('\nYou Have Orderd Latte\n')
        complete_order = true;
        complete()
    }
    else {
        if (coffee_type == 1 || coffee_type == '1') {
            console.log('\nYou Have Orderd Latte With Whipped Cream\n')
            complete_order = true;
            complete()
        }
        else {
            if (coffee_type == 2 || coffee_type == '2') {
                console.log('\nYou Have Orderd Black Coffee\n')
                complete_order = true;
                complete()
            }
            else {
                if (coffee_type == 3 || coffee_type == '3') {
                    console.log('\nYou Have Orderd Cappachino\n')
                    complete_order = true;
                    complete()
                }
                else {
                    if (coffee_type == 4 || coffee_type == '4') {
                        console.log('\nYou Have Orderd Esprasso\n')
                        complete_order = true;
                        complete()
                    }
                    else {
                        rl.close()
                        console.log(`Sorry We Don't Have That Here, ${user_name}`)
                        complete_order = false;
                    }
                }
            }
        }
    }






}
function complete() {
    rl.question('Enter The Quantity That You Want..?\n\n', (quantity) => {

        Quantity = parseInt(quantity)

        if (coffee_type == 0 || coffee_type == '0') {

            price = Quantity * 9
            console.log('\nPrice is ' + price + '$\n')
        }
        else {
            if (coffee_type == 1 || coffee_type == '1') {

                price = Quantity * 12
                console.log('\nPrice is ' + price + '$\n')
            }
            else {
                if (coffee_type == 2 || coffee_type == '2') {

                    price = Quantity * 3
                    console.log('\nPrice is ' + price + '$\n')
                }
                else {
                    if (coffee_type == 3 || coffee_type == '3') {

                        price = Quantity * 13
                        console.log('\nPrice is ' + price + '$\n')
                    }
                    else {
                        if (coffee_type == 4 || coffee_type == '4') {

                            price = Quantity * 10
                            console.log('\nPrice is ' + price + '$\n')
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
            console.log('\nYour Order Has Rejected\n')
            console.log(`\n Thank You For Coming...See You Again ${user_name}..! \n`)
            rl.close()
        }

    })

}
function finishAll() {
    if (complete_order == true) {
        console.log(`\n Your Order is SuccessFull, ${user_name} \n`)
        console.log(`\n Thank You For Coming...See You Again ${user_name}..! \n`)
        rl.close()
    }
    else (
        rl.close()
    )
}