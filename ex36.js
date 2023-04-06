function count(string){
    value = 1
    fianlObj = {}
    if(string.length == 0){
        return {}
    }
    for(let i = 0; i < string.length; i++){
        if(string[i] in fianlObj){
            storedVal = fianlObj[string[i]]
            fianlObj[string[i]] = storedVal + 1
        }else{
            fianlObj[string[i]] = value
        }
    }
    console.log(fianlObj)
}

count('Saabbcdefg')