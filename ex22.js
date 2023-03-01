function kaCokadekaMe(word){
    vowels = ['a', 'e', 'i', 'o', 'u']
    wordArr = word.split("")
    let arr = ['ka']

    for(let i = 0; i < wordArr.length; i++){
        arr.push(word[i])
        if(vowels.includes(wordArr[i]) && !vowels.includes(word[i+1]) && i + 1 != word.length){
            arr.push('ka')
        }
    }
    return arr.join("")
}

console.log(kaCokadekaMe("maintenance"))
