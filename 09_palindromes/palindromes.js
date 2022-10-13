/*
function palindromes(str) {
    str = str.toLowerCase().replace(/\W/g, "");
    console.log(str);
    let str2 = str.split("").reverse().join("");
    console.log(str2);
    if (str === str2){console.log(true);} else {console.log(false);}


};

palindromes("ZZZZ car, a man, a maracaz.");

// Do not edit below this line
// module.exports = palindromes;
*/



const palindromes = function (str) {
    str = str.toLowerCase().replace(/\W/g, "");
    let str2 = str.split("").reverse().join("");
    if (str === str2){return true;} else {return false;}
};

// Do not edit below this line
module.exports = palindromes;
