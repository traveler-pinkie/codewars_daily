function kebabize(str) {
  // Replace all digits with empty string
  str = str.replace(/\d+/g, '');
  
  // Convert the first character to lowercase
  str = str.charAt(0).toLowerCase() + str.slice(1);
  
  // Replace all uppercase letters with kebab case
  str = str.replace(/[A-Z]/g, match => '-' + match.toLowerCase());
  
  return str;
}



let value = kebabize('CAMEL')
console.log(value)