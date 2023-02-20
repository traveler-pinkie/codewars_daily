// function orderedCount(text){
//     let finalArr = []
//     let newText = text.split("");
//     let val = 1;
//     let pastVal;
//     let myArray = {}
//     for(let i = 0; i < newText.length; i++){
//         let currentVal = newText[i];
//         if (myArray.hasOwnProperty(currentVal)){
//             val += 1
//             myArray[currentVal] = val
//         }else{
//             pastVal = currentVal
//             val = 1
//             myArray[currentVal] = val
//         }
//     }
//     for(const property in myArray ){
//         finalArr.push([property, myArray[property]])
//     }
//     return (finalArr)

// }

function orderedCount(input){
    let counts = {}
    for(let i = 0; i < input.length; i++){
        let char = input[i];
        if(counts[char]){
            counts[char]++
        }else{
            counts[char] = 1
        }
    }
    return [...new Set(input)].map(char => [char, counts[char]])
}


console.log(orderedCount("233312"))

// This function works in the same way as the Python implementation. We initialize an empty object counts to store the counts of each character 
// in the input string. We then iterate through each character in the input string and update its count in the counts object. Finally, we construct
//  an array of tuples for each unique character in the input string, where the first element of each tuple is the character itself and the second 
// element is its count in the input string.

// The use of the Set object and the spread operator ... in the return statement allows us to create an array of unique characters in the 
// input string while preserving their order of appearance.

// To test this function with the input "abracadabra", we can simply call the function and print the result: