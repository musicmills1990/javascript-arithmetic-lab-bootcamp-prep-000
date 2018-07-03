function add(a,b){
  return a + b;
}
function subtract(a,b){
  return a - b;
}
function multiply(a,b){
  return a * b;
}
function divide(a,b){
  return a / b;
}
function inc(a){
  return a += 1;
}
function dec(a){
  return a -= 1;
}
function makeInt(n){
  var integer = parseInt('n',10)
  if(isNaN(integer)) {return 0}
  else return integer;
}
function preserveDecimal(n){
  var noninteger = parseFloat('n')
  if(isNaN(noninteger)) {return NaN}
  else return noninteger
}
