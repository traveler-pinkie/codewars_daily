function addLength(str){
    let wordArr = str.split(" ")
    for(let i = 0; i < wordArr.length; i++){
        wordLen = wordArr[i].length
        wordArr[i] = wordArr[i] +  ` ${wordLen}`
    }
    return wordArr
}

console.log(addLength("you will win"))