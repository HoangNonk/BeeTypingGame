
// ----------------------------- Declare DOM -----------------------------------------
const getAll = (dom) => document.querySelectorAll(dom)
const get = (dom) => document.querySelector(dom)
const create = (dom) => document.createElement(dom)

// --- Sound --- 
const presskey = get('#presskey')
const wrong = get('#wrong')

// Logo - Title - Start
const title = get('#title')
const logo = get('#logo')
const start = get('#start');

// Text - Input
const boxtext = get('#text');
const text = get('#text h3');
const type = get("#myInput");

// -- Using Global variables --
var lettersFromWord, typedWords, wrongWordsTyped = [], correctWordsTyped = []

//--------------------------- Get all keys exist on screen ---------------------------
// Select row key on keyboard
const row1 = get('#rowkey1');
const row2 = get('#rowkey2');
const row3 = get('#rowkey3');
const row4 = get('#rowkey4');
const row5 = get('#rowkey5');

// Render key on keyboard
function renderKey(keyboard, rowkey) {
    keyboard.forEach(e => {
        var key = document.createElement('p');
        key.textContent = e.name;
        key.id = e.id
        key.className = 'key'
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
    title.classList.add('disapear')
    getStart()

    var interval = setInterval(() => {
        title.classList.remove('disapear')
    }, 1000)

    setTimeout(() => {
        clearInterval(interval)
        // startTime = 5;

        type.disabled = false;
        type.focus();
        replace();
        setNewTime();
        // }, startTime * 1000)
    }, 1000)


}

function getStart() {
    startTime--;
    title.innerHTML = `
    <div class="flex items-center justify-center gap-x-2 w-3/12 mx-auto">
        <img id="logo" width="100px" src="assets/img/down-time.gif" alt="">
        <p class="text-white" id="clock">${startTime}</p>
    </div>
    `
    // startTime == 0 ? calcScore() : ''
    if (startTime == 0) {
        type.disabled = true;
        text.textContent = calcScore()
    }
}

const arr = (arr) => { return Array.from(arr) }

function calcScore() {
    var removeSpace = [];
    typedWords = getAll('#text p')
    // typedWords = document.querySelectorAll('#text p');
    typedWords.forEach(e => { e.textContent === ' ' ? '' : removeSpace.push(e) })

    arr(removeSpace).forEach(w => {
        var typedLetter = w.getElementsByClassName('correctLetter');
        var typedLetter2 = w.getElementsByClassName('wrongLetter');
        console.log(typedLetter);
        var lettersInWord = w.getElementsByTagName('span')

        typedLetter.length === lettersInWord.length ? correctWordsTyped.push(w) : ''
        typedLetter2.length === lettersInWord.length ? wrongWordsTyped.push(w) : ''
    })

    var score = correctWordsTyped.length / (50 / 60)
    console.log('Số từ đúng: ' + correctWordsTyped.length);
    console.log('Số từ sai: ' + wrongWordsTyped.length);
    console.log(`Tốc độ gõ: ${score.toFixed(2)} wpm`)

    return `
            Số từ đúng: ${correctWordsTyped.length} ~
            Số từ sai: ${wrongWordsTyped.length} ~
            Tốc độ gõ: ${score.toFixed(2)} wpm
    `
}

function setNewTime() {
    startTime = 10;

    var interval = setInterval(() => {
        getStart();
    }, 1000)

    setTimeout(() => {
        clearInterval(interval)
        startTime = 0;
        type.disabled = true;
    }, startTime * 1000)
}


// ----------------------------- Out of time -----------------------------------------
function timeout(startTime) {

}

//--------------------------------- get new word ---------------------------------------
function getNewWord() {
    // get data array length
    const data = words.length

    // get random element in array
    const random = Math.random() * data;

    // rounding the randomnumber has earned
    const index = Math.floor(random);

    // return the final index of array
    return words[index];
}

//--------------------------------- get new word ---------------------------------------
function getNewQuote() {
    // get data array length
    const data = quotes.length

    // get random element in array
    const random = Math.random() * data;

    // rounding the randomnumber has earned
    const index = Math.floor(random);

    // return the final index of array
    return quotes[index];
}

//--------------------------- replace old word has typed -----------------------------

function replace() {
    text.textContent = ''

    const data = getNewWord();

    var word = create('p')
    arr(data).forEach(lt => {
        const letter = create('span');
        letter.textContent = lt
        word.appendChild(letter);
    })

    text.appendChild(word)

    // const data = getNewQuote();

    // arr(data).forEach(w => {
    //     var word = create('p')
    //     var split = w.split('')
    //     arr(split).forEach(lt => {
    //         const letter = create('span');
    //         letter.textContent = lt
    //         word.appendChild(letter);
    //     })
    //     text.appendChild(word)
    // })

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

var wordScore = 0;
function checkInputString(inputString, compareString) {
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

    color === 'correct' ? wordScore++ : ''
}

//--------------------------- Handle Correct/Wrong letters on Words from Data ---------------------

function checkCorrectLettersOnWord(letters, index, input, color) {

    input.length == 0 ? arr(letters).forEach(lt => { lt.className = '' }) : ''

    if (input.length !== letters.length) {
        letters[index + 1].className = ``
        letters.forEach(lt => { lt.classList.remove('typing') })
    }

    letters[index].className = `${color} typing`
}

//--------------------------- Listening event on input , on key down -----------------------------

type.addEventListener("input", () => {
    var keySound, keyColor, letterColor

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

    keyColor = charFromNewWord === charFromInput ? "changecolor" : "wrongkey"
    keySound = keyColor === "changecolor" ? presskey : wrong
    checkCorrectKeyOnBoard(allkeyonscreen, charFromInput, keyColor, keySound)

    // ----
    checkInputString(value, newWord)

    // ---
    lettersFromWord = document.querySelectorAll('#text span')
    letterColor = charFromNewWord === charFromInput ? 'correctLetter' : 'wrongLetter'
    checkCorrectLettersOnWord(lettersFromWord, indexChar, value, letterColor)

    calcScore();
})


