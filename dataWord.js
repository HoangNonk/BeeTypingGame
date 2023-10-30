// -------------------------------------- ALL KEYS ON KEYBOARD -------------------------------------------

const rowkey1 = [
    { name: "1 !", id: "1", char: "1", shift: "!", keycode: 49 },
    { name: "2 @", id: "2", char: "2", shift: "@", keycode: 50 },
    { name: "3 #", id: "3", char: "3", shift: "#", keycode: 51 },
    { name: "4 $", id: "4", char: "4", shift: "$", keycode: 52 },
    { name: "5 %", id: "5", char: "5", shift: "%", keycode: 53 },
    { name: "6 ^", id: "6", char: "6", shift: "^", keycode: 54 },
    { name: "7 &", id: "7", char: "7", shift: "&", keycode: 55 },
    { name: "8 *", id: "8", char: "8", shift: "*", keycode: 56 },
    { name: "9 (", id: "9", char: "9", shift: "(", keycode: 57 },
    { name: "0 )", id: "0", char: "0", shift: ")", keycode: 48 },
    { name: "- _", id: "-", char: "-", shift: "_", keycode: 45 },
    { name: "= +", id: "=", char: "=", shift: "+", keycode: 61 },
]

const rowkey2 = [
    { name: "Q", id: "q", char: "q", shift: "Q", keycode: 81 },
    { name: "W", id: "w", char: "w", shift: "W", keycode: 87 },
    { name: "E", id: "e", char: "e", shift: "E", keycode: 69 },
    { name: "R", id: "r", char: "r", shift: "R", keycode: 82 },
    { name: "T", id: "y", char: "y", shift: "T", keycode: 84 },
    { name: "Y", id: "y", char: "y", shift: "Y", keycode: 89 },
    { name: "U", id: "u", char: "u", shift: "U", keycode: 85 },
    { name: "I", id: "i", char: "i", shift: "I", keycode: 73 },
    { name: "O", id: "o", char: "o", shift: "O", keycode: 79 },
    { name: "P", id: "p", char: "p", shift: "P", keycode: 80 },
    { name: "[", id: "[", char: "[", shift: "{", keycode: 91 },
    { name: "]", id: "]", char: "]", shift: "}", keycode: 93 },
    { name: "\\ |", id: "\\", char: "\\", shift: "|", keycode: 93 },
]

const rowkey3 = [
    { name: "A", id: "a", char: "a", shift: "A", keycode: 65 },
    { name: "S", id: "s", char: "s", shift: "S", keycode: 83 },
    { name: "D", id: "d", char: "d", shift: "D", keycode: 68 },
    { name: "F", id: "f", char: "f", shift: "F", keycode: 70 },
    { name: "G", id: "g", char: "g", shift: "G", keycode: 71 },
    { name: "H", id: "h", char: "h", shift: "H", keycode: 72 },
    { name: "J", id: "j", char: "j", shift: "J", keycode: 74 },
    { name: "K", id: "k", char: "k", shift: "K", keycode: 75 },
    { name: "L", id: "l", char: "l", shift: "L", keycode: 76 },
    { name: "; :", id: ";", char: ";", shift: ":", keycode: 59 },
    { name: "' \"", id: "'", char: "'", shift: "\"", keycode: 39 },
]

const rowkey4 = [
    { name: "Z", id: "z", char: "z", shift: "Z", keycode: 90 },
    { name: "X", id: "x", char: "x", shift: "X", keycode: 88 },
    { name: "C", id: "c", char: "c", shift: "C", keycode: 67 },
    { name: "V", id: "v", char: "v", shift: "V", keycode: 86 },
    { name: "B", id: "b", char: "b", shift: "B", keycode: 66 },
    { name: "N", id: "n", char: "n", shift: "N", keycode: 78 },
    { name: "M", id: "m", char: "m", shift: "M", keycode: 77 },
    { name: ", <", id: ",", char: ",", shift: "<", keycode: 44 },
    { name: ". >", id: ".", char: ".", shift: ">", keycode: 46 },
    { name: "/ ?", id: "/", char: "/", shift: "?", keycode: 46 },
];

const rowkey5 = [
    { name: "______________", id: "space", char: " ", shift: "", keycode: 32 },
]

// -------------------------------------- ALL DATA WORDS - QUOTES - SYMBOLS - CHARS -------------------------------

var q, quotes = [], w, words = [], letters

w = [
    "apple",
    "banana",
    "cherry",
    "dog",
    "elephant",
    "fox",
    "grape",
    "horse",
    "ice cream",
    "jacket",
    "kangaroo",
    "lemon",
    "monkey",
    "noodle",
    "orange",
    "parrot",
    "quokka",
    "rabbit",
    "strawberry",
    "turtle",
    "umbrella",
    "violet",
    "watermelon",
    "xylophone",
    "yogurt",
    "zebra",
    "car",
    "train",
    "flower",
    "sun",
    "moon",
    "star",
    "ocean",
    "mountain",
    "river",
    "computer",
    "book",
    "pen",
    "pencil",
    "notebook",
    "desk",
    "chair",
    "table",
    "lamp",
    "shoes",
    "hat",
    "shirt",
    "pants",
    "socks",
    "guitar"
];

q = [
    `Success is not final, failure is not fatal: It is the courage to continue that counts.`,
    `The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.`,
    `In three words I can sum up everything I've learned about life: it goes on.`,
    `The best way to predict the future is to create it.`,
    `Life is really simple, but we insist on making it complicated.`,
    `The only thing necessary for the triumph of evil is for good men to do nothing.`,
    `Happiness is not something ready made. It comes from your own actions.`,
    `The only limit to our realization of tomorrow will be our doubts of today.`,
    `The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.`,
    `Don't count the days, make the days count.`,
]

// --------------- Collect words -----------------

w.forEach(e => {
    letters = e.split('')
    words.push(letters)
})

// --------------- Collect quotes -----------------

const regQuote = /[\S]+|\s/g
q.forEach(e => {
    letters = e.match(regQuote);
    quotes.push(letters);
})

// console.log(quotes);
// console.log(words);





















































