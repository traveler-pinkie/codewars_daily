function wave(str){
    let result = [];
    for(let i = 0; i < str.length; i++){
        if(str[i] == " "){
            continue
        }else{   
        strArr = str.split("")
        strArr[i] = strArr[i].toUpperCase()
        strArr = strArr.join("")
        result.push(strArr)
        }
    }
    console.log(result)
}   

wave(" gap ")