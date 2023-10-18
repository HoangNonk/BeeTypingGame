
// ----------------------------- Declare DOM -----------------------------------------
const presskey = document.getElementById('presskey');
const wrong = document.getElementById('wrong');

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

renderKey(rowkey1, row1)
renderKey(rowkey2, row2)
renderKey(rowkey3, row3)

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


let id = 0;
let flag = true;
type.addEventListener("input", (e) => {
    // input value
    const inpValue = myInput.value;

    // word data
    var newWord = text.textContent;
    type.maxLength = newWord.length;

    // split the word to array for checking Char from keyName
    var splitWord = newWord.split('')
    if (splitWord[id] === inpValue[id]) {
        e.target.classList.add('correct');
        setTimeout(() => {
            if (id === text.textContent.length) {
                replace();
                id = 0;
            }
            e.target.classList.remove('correct');

        }, 500)
        allkeyonscreen.forEach(e => {
            e.classList.remove('changecolor')
        })
        console.log('Phần tử tách từ word:' + newWord.split('')[id]);
        console.log('Phần tử nhập vào: ' + inpValue[id]);
        flag = true;
        console.log(flag);
        console.log('Biến đêm phần tử :' + id);

    } else {
        console.log(newWord.split('')[id]);
        console.log(inpValue[id]);
        flag = false;
        console.log(flag);
    }
    id++;



    // check if the input value is the same with the word from data
    // if (value === newWord) {
    //     e.target.classList.add('correct');
    //     setTimeout(() => {
    //         e.target.classList.remove('correct');
    //         replace();
    //     }, 500)
    //     allkeyonscreen.forEach(element => {
    //         element.classList.remove('changecolor')
    //     })
    // }
})

// Handle change color on keyboard
type.addEventListener("keydown", (e) => {
    const value = myInput.value;
    var newWord = text.textContent

    // Get the key code typed
    var keyCode = e.keyCode;
    var keyName = String.fromCharCode(keyCode)

    // check the keycode typed is the same with the key exist on screen
    checkCorrectKey(allkeyonscreen, newWord, keyName);
});


function checkCorrectKey(keyboard, word, keyName) {
    keyboard.forEach(e => {
        if (keyName == e.textContent) {

            if (word.toLowerCase().includes(keyName.toLowerCase())) {
                // change color if that is the same
                e.classList.add('changecolor');

                // sound presskey on
                presskey.play();
            } else {
                e.classList.remove('changecolor')
                e.classList.add('wrong');
                wrong.play();

                setTimeout(() => {
                    e.classList.remove('wrong')
                }, 1000)
            }
        }
    })
}



