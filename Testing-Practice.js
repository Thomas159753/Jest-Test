function capitalize (string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString (string){
  return string.split('').reduce((acc, char) => char + acc, "")
}

const calculator = {
  add(a,b){
    const result = a + b;
    return Math.round(result * 100) / 100
  },

  subtract(a,b){
    if(b < 0){
      result = a - (-b);
      return Math.round(result * 100) / 100;
    }else{
      result = a - b;
      return Math.round(result * 100) / 100;
    }
  },

  divide(a,b){
    const result = a / b;
    return Math.round(result * 100) / 100;
  },

  multiply(a,b){
    const result = a * b;
    return Math.round(result * 100) / 100;
  }
}

function caesarCipher(string,factor){
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let newArray = ""
  let lowerString = string.toLowerCase();

  for(let character of lowerString){

    if(alphabet.includes(character)){
      let index = alphabet.indexOf(character) + factor

      if(index > alphabet.length) index = index % alphabet.length
      newArray += `${alphabet[index]}`;

    }else if(character === " "){
      newArray += " "
    }
  }
  return newArray
} 

function analyzeArray (array){

  if (!Array.isArray(array) ||!array.every(element => typeof element === 'number')) return null

  return {
    length: array.length,
    min: Math.min(...array),
    max:  Math.max(...array),
    average: array.reduce((a,b) => a + b) / array.length
  }
}

console.log(analyzeArray([1,8,3,4,2,6]).average);

module.exports = {
  capitalize: capitalize,
  reverseString: reverseString,
  calculator: calculator,
  caesarCipher:caesarCipher,
  analyzeArray: analyzeArray
};