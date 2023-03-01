function kaCokadekaMe(word){
    vowels = ['a', 'e', 'i', 'o', 'u']
    wordArr = word.split("")
    let arr = ['ka']

    for(let i = 0; i < wordArr.length; i++){
        arr.push(word[i])
        // first condition checks if the current letter is a vowel
        //second condition checks if the next letter is not a vowel
        // third condition check if i + 1 is not equal to the word length
        // if all are true, then push ka to the array
        if(vowels.includes(wordArr[i]) && !vowels.includes(word[i+1]) && i + 1 != word.length){
            arr.push('ka')
        }
    }
    return arr.join("")
}

console.log(kaCokadekaMe("maintenance"))