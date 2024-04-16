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
  for(let character of string){
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
caesarCipher("ab z",3);
// module.exports = {
//   capitalize: capitalize,
//   reverseString: reverseString,
//   calculator: calculator
// };