//first we can sepearte the sting into an array using the split method
//with that array, we can itirate through it to grad each word, we can then itirate through each word to get the letter
//and value.
//with each value we add it up and save it in a nex array or dictionary
//once all the elements have been observed, we compare the values and grab the index, with the index
//we return the word.

function high(x){
    const alpha = Array.from(Array(26)).map((e,i) => i + 65)
    const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase())
    const wordArr = x.split(" ")
    let highestValWord 
    let wordVal = 0
    let valArr = []
    wordArr.forEach(word => {
        for(let i = 0; i < word.length; i++){
            wordVal += alphabet.indexOf(word[i]) + 1
        }
        valArr.push(wordVal)
        wordVal = 0
    })
    return(wordArr[valArr.indexOf(Math.max(...valArr))])
}

high('man i need a taxi up to ubud')