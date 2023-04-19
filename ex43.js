// function christmasTree(height) {
//   if (height < 3) {
//     return "";
//   }
//   let tree = "";
//   for (let i = 0; i <= height; i +=1) {
//     let spaces = " ".repeat((height - i) / 2);
//     let stars = "*".repeat(i);
//     tree += spaces + stars + spaces + "\r\n";
//   }
//   tree += " ".repeat((height - 3) / 2) + "###" + " ".repeat((height - 3) / 2) + "\r\n";
//   return tree;
// }

// // Examples
// console.log(christmasTree(3));
// // console.log(christmasTree(9));
// // console.log(christmasTree(17));


















function validatePhoneNumber(str) {
  // Remove all non-digit characters from the string
  const cleanedStr = str.replace(/\D/g, '');

  // Check if the cleaned string starts with a 0 and has a length of 11
  if (cleanedStr.startsWith('0') && cleanedStr.length === 11) {
    return cleanedStr;
  } else {
    return 'Not a phone number';
  }
}

// Example usage
console.log(validatePhoneNumber('efRFS:)0207ERGQREG88349F82!')); // Output: 02078834982
console.log(validatePhoneNumber('02078834982')); // Output: 02078834982
console.log(validatePhoneNumber('0207883498')); // Output: Not a phone number
console.log(validatePhoneNumber('12345678901')); // Output: Not a phone number
