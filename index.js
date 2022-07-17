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

var Menu = [

    {
        'Name': 'Latte',
        'Price': '10$',
        'Number': 0

    },
    {
        'Name': 'Latte with Whipped Cream',
        'Price': '10$',
        'Number': 1
    },
    {
        'Name': 'Black Coffee',
        'Price': '3$',
        'Number': 2
    },
    {
        'Name': 'Cappachino',
        'Price': '9$',
        'Number': 3
    },
    {
        'Name': 'Esprasso',
        'Price': '8$',
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
        console.log('Price is ' + Menu[0].Price)
        complete_order = true;
        complete()
    }
    else {
        if (coffee_type == 1 || coffee_type == '1') {
            console.log('\nYou Have Orderd Latte With Whipped Cream\n')
            console.log('Price is ' + Menu[1].Price)
            complete_order = true;
            complete()
        }
        else {
            if (coffee_type == 2 || coffee_type == '2') {
                console.log('\nYou Have Orderd Black Coffee\n')
                console.log('Price is ' + Menu[2].Price)
                complete_order = true;
                complete()
            }
            else {
                if (coffee_type == 3 || coffee_type == '3') {
                    console.log('\nYou Have Orderd Cappachino\n')
                    console.log('Price is ' + Menu[3].Price)
                    complete_order = true;
                    complete()
                }
                else {
                    if (coffee_type == 4 || coffee_type == '4') {
                        console.log('\nYou Have Orderd Esprasso\n')
                        console.log('Price is ' + Menu[4].Price)
                        complete_order = true;
                        complete()
                    }
                    else {
                        rl.close()
                        console.log(`Invalid...Please try Again, ${user_name}`)
                        complete_order = false;
                    }
                }
            }
        }
    }






}
function complete() {
    if (complete_order == true) {
        console.log(`\n Your Order is SuccessFull, ${user_name} \n`)
        console.log(`\n Thank You For Coming...See You Again ${user_name}..! \n`)
        rl.close()
    }
    else (
        rl.close()
    )
}