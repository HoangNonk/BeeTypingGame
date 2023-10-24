var rowkey1 = [
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

var rowkey2 = [
    { name: "Q", id: "q", char: "q", shift: "Q", keycode: 81 },
    { name: "W", id: "w", char: "w", shift: "W", keycode: 87 },
    { name: "E", id: "e", char: "e", shift: "E", keycode: 69 },
    { name: "R", id: "r", char: "r", shift: "R", keycode: 82 },
    { name: "T", id: "y", char: "y", shift: "T", keycode: 84 },
    { name: "Y", id: "y", char: "y", shift: "Y", keycode: 89 },
    { name: "U", id: "u", char: "u", shift: "U", keycode: 85 },
    { name: "I", id: "i", char: "i", shift: "I", keycode: 73 },
    { name: "P", id: "o", char: "o", shift: "O", keycode: 79 },
    { name: "P", id: "p", char: "p", shift: "P", keycode: 80 },
    { name: "[", id: "[", char: "[", shift: "{", keycode: 91 },
    { name: "]", id: "]", char: "]", shift: "}", keycode: 93 },
    { name: "\\ |", id: "\\", char: "\\", shift: "|", keycode: 93 },
]

var rowkey3 = [
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

var rowkey4 = [
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

var rowkey5 = [
    { name: "______________", id: "space", char: " ", shift: "", keycode: 32 },
]

const words = [
    `In the heart of the bustling city, where the cacophony of car horns and the hum of conversations filled the air, there existed a serene park. This park was an oasis of calm, an escape from the urban frenzy. Tall trees provided shade under which families picnicked and children played. The gentle rustle of leaves in the breeze was a soothing lullaby to all who visited.

    Amidst the greenery, there was a beautiful pond. Its glassy surface mirrored the azure sky above, with lily pads and vibrant koi fish below. A bridge made of weathered stone spanned the pond, inviting people to wander to its other side, where an ornate gazebo stood.
    
    As the sun dipped below the horizon, the park transformed. Soft lamps illuminated the pathways, casting a warm, inviting glow. Couples strolled hand in hand, their laughter and whispered words blending with the chorus of crickets. Under the moon's gentle light, the park became a place of romantic rendezvous, a sanctuary for the city's dreamers.
    
    This park was a testament to the harmonious coexistence of nature and urban life, where the cacophony of the city's chaos found solace in the tranquil embrace of the natural world.
    `,
    // 'Sensor',
    // 'Design',
    // 'Gaming',
    // 'Mobile',
    // 'Camera',
    // 'Printer',
    // 'Source',
    // 'Object',
    // 'Thread',
    // 'Buffer',
    // 'Plugin',
    // 'Search',
    // 'Render',
    // 'Engine',
    // 'Socket',
    // 'Vector',
    // 'Filter',
    // 'Module',
    // 'Script',
    // 'Console',
    // 'Export',
    // 'Gateway',
    // 'Daemon',
    // 'Project',
    // 'Speaker',
    // 'Monitor',
    // 'Control',
    // 'Firmware',
    // 'Library',
    // 'Display',
    // 'Battery',
    // 'Database',
    // 'Package',
    // 'Scanner',
    // 'Adapter',
    // 'Firewall',
    // 'Content',
    // 'Network',
    // 'Service',
    // 'Thay Hoang dep try',
    // 'Longlhph31572',
]




















































