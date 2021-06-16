// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
// You will be passed a string and you must return that string in an array where an uppercase letter 
// is a person standing up. 


function wave(str){
    let i = 0
    let result = []
    while (i < str.length) {
        str[i] === ' ' ? null : result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1) )
        i++
    }
    return result
  } 


result1 = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
console.log(wave("hello"), "Should return: ", result1);

result2 = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
console.log(wave("codewars"), "Should return: ", result2);

result3 = [];
console.log(wave(""), "Should return: ", result3);

result4 = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
console.log(wave("two words"), "Should return: ", result4);

result5 = [" Gap ", " gAp ", " gaP "];
console.log(wave(" gap "), "Should return: ", result5);