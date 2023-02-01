function theVar(theVariables) {
  letters =  ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  letter1 = theVariables[0]
  letter2 = theVariables[2]
  index1 = letters.indexOf(letter1) + 1
  index2 = letters.indexOf(letter2) + 1
  return index1 + index2
}

console.log(theVar('a+b'))