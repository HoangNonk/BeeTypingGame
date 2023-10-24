
// ----------------------------- Declare DOM -----------------------------------------
const presskey = document.getElementById('presskey');
const wrong = document.getElementById('wrong');

const title = document.getElementById('title')
const logo = document.getElementById('logo')
const type = document.getElementById("myInput");
const start = document.getElementById('start');
const boxtext = document.getElementById('text');
const text = document.querySelector('#text h3');
var lettersFromWord
//--------------------------- Get all keys exist on screen ---------------------------
// Select row key on keyboard
const row1 = document.querySelector('#rowkey1');
const row2 = document.querySelector('#rowkey2');
const row3 = document.querySelector('#rowkey3');
const row4 = document.querySelector('#rowkey4');
const row5 = document.querySelector('#rowkey5');

// Render key on keyboard
function renderKey(keyboard, rowkey) {
    keyboard.forEach(e => {
        var key = document.createElement('p');
        key.textContent = e.name;
        key.id = e.id
        key.classList.add('key');
        key.dataset.keycode = e.keycode
        key.dataset.shift = e.shift
        key.dataset.char = e.char
        rowkey.appendChild(key);
    })
}

renderKey(rowkey1, row1)
renderKey(rowkey2, row2)
renderKey(rowkey3, row3)
renderKey(rowkey4, row4)
renderKey(rowkey5, row5)

const allkeyonscreen = document.querySelectorAll('.key');

// ----------------------------- Get started -----------------------------------------
var startTime = 5;
start.onclick = () => {
    boxtext.classList.add('appear');
    start.classList.add('disapear');
    type.placeholder = "Type in here...";
    title.classList.add('disapear')
    getStart()

    var interval = setInterval(() => {
        title.classList.remove('disapear')
    }, 1000)

    setTimeout(() => {
        clearInterval(interval)
        startTime = 5;

        type.disabled = false;
        type.focus();
        replace();
        setNewTime();
    }, startTime * 1000)
}

function getStart() {
    startTime--;
    // title.textContent = startTime + 's';
    title.innerHTML = `
    <div class="flex items-center justify-center gap-x-2 w-3/12 mx-auto">
        <img id="logo" width="100px" src="assets/img/down-time.gif" alt="">
        <p id="clock">${startTime}</p>
    </div>
    `
    // title.classList.remove('disapear')
}

function setNewTime() {
    startTime = 50;

    var interval = setInterval(() => {
        getStart();
    }, 1000)

    setTimeout(() => {
        clearInterval(interval)
        startTime = 0;
        type.disabled = true;
        type.value = 'Your result is ...'
        // type.classList.add('disapear')
    }, startTime * 1000)
}


// ----------------------------- Out of time -----------------------------------------
function timeout(startTime) {

}

//--------------------------------- get new word ---------------------------------------
function getNewWord() {
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

    var split = newWord.split('');

    text.textContent = ''

    split.forEach(e => {
        const letter = document.createElement('span');
        letter.textContent = e
        text.appendChild(letter);
    })

    lettersFromWord = document.querySelectorAll('span')

    // reset input
    type.value = '';
}

//--------------------------- Handle Correct/Wrong key on keyboard -----------------------------

function checkCorrectKeyOnBoard(keyboard, input, color, sound) {
    keyboard.forEach(key => {
        if (input === key.dataset.char || input === key.dataset.shift) {
            var time
            key.classList.add(color)
            sound.play()
            color === "changecolor" ? time = 1000 : time = 500
            setTimeout(() => { key.classList.remove(color) }, time)
        }
    })
}

//--------------------------- Handle Correct/Wrong input String -----------------------------

function checkInputString(inputString, compareString, event) {
    var color;
    if (inputString.length === compareString.length) {
        inputString === compareString ? color = "correct" : color = "wrong"
        text.classList.add(color);
        type.disabled = true
        setTimeout(() => {
            text.classList.remove(color);
            type.disabled = false
            type.focus()
            replace();
        }, 200)
    }
}

//--------------------------- Handle Correct/Wrong letters on New Word -------------------------

function checkCorrectLettersOnWord(letters, index,input, color) {
    if (input.length == 0) {
        letters.forEach(lt => {
            lt.className = '';
        })
    }
    if (input.length !== letters.length) {
        letters[index + 1].className = '';
        letters.forEach(lt => {
            lt.classList.remove('typing');
        })
    }
    letters[index].className = `${color} typing`
}

//--------------------------- Listening event on input , on key down -----------------------------

type.addEventListener("input", (event) => {
    var keySound, keyColor, letterColor

    // input value
    var value = myInput.value;

    // word data
    var newWord = text.textContent

    // declare counting variable
    indexChar = value.length - 1;
    console.log(indexChar);

    // indexChar from newWord
    var charFromNewWord = newWord.split('')[indexChar]

    // indexChar from inputvalue
    var charFromInput = value[indexChar];

    keyColor = charFromNewWord === charFromInput ? "changecolor" : "wrongkey"
    keySound = keyColor === "changecolor" ? presskey : wrong
    checkCorrectKeyOnBoard(allkeyonscreen, charFromInput, keyColor, keySound)

    // ----
    checkInputString(value, newWord, event)

    // ---
    letterColor = charFromNewWord === charFromInput ? 'correctLetter' : 'wrongLetter'
    checkCorrectLettersOnWord(lettersFromWord,indexChar,value,letterColor)
})


