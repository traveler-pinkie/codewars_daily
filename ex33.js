function findDuplicatePhoneNumbers(phoneNumbers) {
  const mapping = {
    A: 2,
    B: 2,
    C: 2,
    D: 3,
    E: 3,
    F: 3,
    G: 4,
    H: 4,
    I: 4,
    J: 5,
    K: 5,
    L: 5,
    M: 6,
    N: 6,
    O: 6,
    P: 7,
    R: 7,
    S: 7,
    T: 8,
    U: 8,
    V: 8,
    W: 9,
    X: 9,
    Y: 9,
  };
  const duplicates = {};
  for (let phoneNumber of phoneNumbers) {
    // Convert letters to numbers
    let digits = "";
    for (let char of phoneNumber) {
      if (mapping[char.toUpperCase()]) {
        digits += mapping[char.toUpperCase()];
      } else if (/[0-9]/.test(char)) {
        digits += char;
      }
    }
    // Add hyphen to standard form
    let standardForm = digits.slice(0, 3) + "-" + digits.slice(3);
    // Count duplicates
    if (duplicates[standardForm]) {
      duplicates[standardForm]++;
    } else {
      duplicates[standardForm] = 1;
    }
  }
  // Format output
  let result = [];
  for (let standardForm in duplicates) {
    if (duplicates[standardForm] > 1) {
      result.push(`${standardForm}:${duplicates[standardForm]}`);
    }
  }
  return result.sort();
}


let testarr = [
"7399425",
"SEXY-GAL",
"Sexy-GAL",
"sexy-gal",
"SEXY-425",
"S-E-X-Y-G-A-L"
]

let result = findDuplicatePhoneNumbers(testarr)

console.log(result)