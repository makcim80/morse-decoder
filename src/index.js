const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let letterStr = '';
    let letterArr = [];
    let result = [];

    MORSE_TABLE[' '] = ' ';

    for (let i = 0; i < expr.length / 10; i++) {
        letterStr += expr.slice(i * 10, i * 10 + 10) + ','
    }

    letterArr = letterStr
    .replace(/00/g, '')
    .replace(/10/g, '.')
    .replace(/11/g, '-')
    .replace(/\*{10}/g, ' ')
    .split(',')
    letterArr.splice(-1, 1)

    for (let item of letterArr) {
        result.push(MORSE_TABLE[item])
    }

    return result.join('')
}

module.exports = {
    decode
}