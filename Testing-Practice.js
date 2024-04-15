function capitalize (string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString (string){
  return string.split('').reduce((acc, char) => char + acc, "")
}

const calculator = {
  add(a,b){
    const result = a + b;
    return Math.ceil(result * 100) / 100;
  },

  subtract(a,b){
    return a - (b);
    // return Math.ceil(result * 100) / 100;
  }

  // divide(){

  // }

  // multiply(){

  // }
}

module.exports = {
  capitalize: capitalize,
  reverseString: reverseString,
  calculator: calculator
};