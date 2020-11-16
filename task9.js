const num = /\d+/g;
const lett = /[a-zA-Z]/g;

function findNumber (str) {
    let finalStr = [];
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == lett || str[i] == num) {
            return 'this string contain extra symnols';
        }  else if (str[i] !== num) {
            finalStr = str[i];
        } else return 'no numbers in the string';
    }
    return finalStr
}

console.log(findNumber('g6o8y 6 hbo9ig78b'))

