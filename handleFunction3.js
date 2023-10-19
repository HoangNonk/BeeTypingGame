
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
function renderKey(keyboard, rowkey) {
    keyboard.forEach(e => {
        var key = document.createElement('p');
        key.textContent = e.name;
        key.classList.add('key');
        key.dataset.keycode = e.keycode
        rowkey.appendChild(key);
    })
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


//--------------------------- Handle Correct/Wrong key on keyboard -----------------------------

function checkCorrectKeyOnBoard(keyboard, input, color, sound) {
    keyboard.forEach(key => {
        if (input.toUpperCase() === key.textContent) {
            var time
            key.classList.add(color)
            sound.play()
            color === "changecolor" ? time = 1000 : time = 500 
            setTimeout(() => { key.classList.remove(color) },time)
        }
    })
}

//--------------------------- Handle Correct/Wrong input String -----------------------------

function checkInputString(inputString,compareString,event) {
    var color;
    if (inputString.length === compareString.length) {
        inputString === compareString ? color = "correct" : color = "wrong"
        event.target.classList.add(color);
        type.disabled = true
        setTimeout(() => {
            event.target.classList.remove(color);
            type.disabled = false
            type.focus()
            replace();
        }, 500)
    }
}

//--------------------------- Listening event on input , on key down -----------------------------

type.addEventListener("input", (event) => {
    var keySound, keyColor

    // input value
    var value = myInput.value;

    // word data
    var newWord = text.textContent

    // declare counting variable
    indexChar = value.length - 1;

    // indexChar from newWord
    var charFromNewWord = newWord.split('')[indexChar]

    // indexChar from inputvalue
    var charFromInput = value[indexChar];

    charFromNewWord === charFromInput ? keyColor = "changecolor" : keyColor = "wrongkey"
    keyColor === "changecolor" ? keySound = presskey : keySound = wrong

    checkCorrectKeyOnBoard(allkeyonscreen, charFromInput, keyColor, keySound)
    checkInputString(value, newWord, event)
})


