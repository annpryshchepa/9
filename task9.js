const num = /\d+/g;
const lett = /[a-zA-Z]/g;

function findNumber (str) {
    let finalStr;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] !== lett || str[i] !== num) {
            return 'this string contain extra symnols';
        }  else if (str[i] == num) {
            let finalStr = str[i];
        } else return 'no numbers in the string';
    }
    return finalStr
}


console.log(findNumber('g6o8yhbo9ig78b'))

//const paragraph = 'The quifck brown5 fox ju44mps 7 ove1r the lazy dog. It barked.';
//const regex = /\d+/g;
//const found = paragraph.match(regex);
//console.log(found);