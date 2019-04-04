
function xo(str) {
  var x = 0
  var o = 0
  for(var i = 0; i < str.length; i++) {
    if(str[i] === "x") {
      x += 1
    } else if(str[i] === "o") {
      o += 1
    }
  }
  if(x === o) {
    return true
  } else {
    return false
  }
}

  // Test Case
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true