function rotate(str){
    let holderArr = str.split("")
    let finalArr = []
    if(str === ""){
        return []
    }
    for(let i = 0; i < str.length; i++){
        let firstVal = holderArr[0]
        holderArr.shift()
        holderArr.push(firstVal)
        let word = holderArr.join("")
        finalArr.push(word)
    }
    return(finalArr)
}

rotate("Hello")