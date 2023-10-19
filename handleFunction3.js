
// ----------------------------- Declare DOM -----------------------------------------
const presskey = document.getElementById('presskey');
const wrong = document.getElementById('wrong');

const title = document.getElementById('title')
const logo = document.getElementById('logo')
const type = document.getElementById("myInput");
const start = document.getElementById('start');
const boxtext = document.getElementById('text');
const text = document.querySelector('#text h3');
var hide = document.querySelector('#text #hide').value;

var clockCounting = document.querySelector('#clock span');

//--------------------------- Get all keys exist on screen ---------------------------
// Select row key on keyboard
const row1 = document.querySelector('#rowkey1');
const row2 = document.querySelector('#rowkey2');
const row3 = document.querySelector('#rowkey3');
const row4 = document.querySelector('#rowkey4');

// Render key on keyboard
function renderKey(array, rowkey) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        var key = document.createElement('p');
        key.textContent = element.name;
        key.classList.add('key');
        key.dataset.keycode = element.keycode
        rowkey.appendChild(key);
    }
}

// renderKey(rowkey1, row1)
renderKey(rowkey2, row2)
renderKey(rowkey3, row3)
renderKey(rowkey4, row4)

const allkeyonscreen = document.querySelectorAll('.key');

// ----------------------------- Get started -----------------------------------------
var startTime = 5;
start.onclick = () => {
    boxtext.classList.add('appear');
    start.classList.add('disapear');
    type.placeholder = "Type in here...";

    // var interval = setInterval(() => {
    //     getStart()
    // }, 1000)

    // setTimeout(() => {
    //     clearInterval(interval)
    //     startTime = 5;
    type.disabled = false;
    type.focus();
    replace();
    //     setNewTime();
    // }, startTime * 1000)
}

// function getStart() {
//     startTime--;
//     clockCounting.textContent = startTime + 's';
// }

// function setNewTime() {
//     startTime = 3;

//     var interval = setInterval(() => {
//         getStart();
//     }, 1000)

//     setTimeout(() => {
//         clearInterval(interval)
//         startTime = 0;
//         type.disabled = true;
//         type.value = 'Your result is ...'
//         // type.classList.add('disapear')
//     }, startTime * 1000)
// }


// ----------------------------- Out of time -----------------------------------------
function timeout(startTime) {

}

//--------------------------------- get new word ---------------------------------------
function getNewWord() {
    var count = 0;
    // get data array length
    const wordsdata = words.length

    // get random element in array
    const random = Math.random() * wordsdata;

    // rounding the randomnumber has earned
    const index = Math.floor(random);

    // return the final index of array
    return words[index];
}

//--------------------------- replace old word has typed -----------------------------
function replace() {
    const newWord = getNewWord();

    // replace
    text.textContent = newWord;

    // reset input
    type.value = '';
}

//--------------------------- Listening event on input , on key down -----------------------------
// declare check variable
var key;
type.addEventListener("input", (event) => {

    // input value
    var value = myInput.value;

    // word data
    var newWord = text.textContent

    // console.log(indexChar);

    // declare counting variable
    indexChar = value.length - 1;
    if (newWord.split('')[indexChar] === value[indexChar]) {
        allkeyonscreen.forEach(e => {
            if (value[indexChar].toUpperCase() === e.textContent) {

                // change color if that is the same
                e.classList.add('changecolor');

                // sound presskey on
                presskey.play();
            }
        })
    }
    else {
        allkeyonscreen.forEach(e => {

            if (value[indexChar].toUpperCase() === e.textContent) {
                e.classList.remove('changecolor')
                e.classList.add('wrongkey');
                wrong.play();
                setTimeout(() => {
                    e.classList.remove('wrongkey')
                }, 1000)
            }
        })
    }


    console.log(newWord.split(''));
    console.log(value.split(''))
    console.log(key);

    // check if the input value is the same with the word from data
    if (value.length === newWord.length) {
        if (value === newWord) {
            event.target.classList.add('correct');
            type.disabled = true
            setTimeout(() => {
                event.target.classList.remove('correct');
                type.disabled = false
                type.focus()
                replace();
            }, 500)
            allkeyonscreen.forEach(element => {
                element.classList.remove('changecolor')
            })
        } else {
            event.target.classList.add('wrong');
            type.disabled = true
            setTimeout(() => {
                event.target.classList.remove('wrong');
                replace();
                type.disabled = false
                type.focus()
            }, 500)
            allkeyonscreen.forEach(element => {
                element.classList.remove('changecolor')
            })
        }
    }
})


