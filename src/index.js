module.exports = function check(str, bracketsConfig) {
  let stack = [];
  
  for( let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];
    
    for( let j = 0; j < bracketsConfig.length; j++) {
      let currentConfig = bracketsConfig[j];

      if(currentConfig.includes(currentSymbol)) {
        currentSymbol == currentConfig[1] ?
          (topElement == currentConfig[0] ? stack.pop() : stack.push(currentSymbol)) :
          stack.push(currentSymbol);
      }
    }
  };

  return stack.length === 0;
}
