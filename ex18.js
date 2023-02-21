function longestRepetition(s) {
    let prevVal
    let myArray = {}
    for(let i = 0; i < s.length; i++){
        if(s.length == null){
            return ["",0]
        }else if(myArray[s[i]] && prevVal != s[i]){
            myArray[s[i]] = 1
            prevVal = s[i]
        }else if(myArray[s[i]]){
            myArray[s[i]]++
            prevVal = s[i]
        }else{
            myArray[s[i]] = 1
            prevVal = s[i]
        }
    }
    let arr = Object.values(myArray)
    let max = Math.max(...arr)
    for (let i in myArray){
        if(myArray[i] == max){
            let result = [i, max]
            return result
        }
    }
    return result
}

console.log(longestRepetition(""))