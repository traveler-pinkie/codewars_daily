//first split the string into an array
//next sort through each element and find the number
//with the number we can do words[number-1] to reassign the position
//once we loop through the whole array, return it. 

function order(words){
    let wordsArr = words.split(" ")
    let finalArr = []
    wordsArr.forEach(element => {
        for(let i=0; i<element.length; i++){
            if(!isNaN(element[i])){
                let number = element[i]
                finalArr[number-1] = element
            }
        }
    })
    return(finalArr.join(" "))
}

order("is2 Thi1s T4est 3a")