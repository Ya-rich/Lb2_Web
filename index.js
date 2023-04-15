let input = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let arr = Array.from(buttons)
arr.forEach(buttons => {
    buttons.addEventListener("click", (e) => {

        if (e.target.innerHTML === '=' ) {
            if(input.value !== '') {
                input.value = eval(input.value);
            }
            else {
                input.value =''
            }

        } else if (e.target.innerHTML == 'C') {

            input.value = '';

        } else if (e.target.innerHTML == 'CE') {

            input.value = input.value.substring(0, input.value.length - 1);

        } else {

            input.value += e.target.innerHTML;

        }
    })
})

