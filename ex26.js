function toCamelCase(str){
    if(str === ""){
        return ""
    }
    let strArr = str.split(/[-_]/)
    if(strArr[0][0] === strArr[0][0].toUpperCase()){
        for(let i = 0; i<strArr.length; i++){
            let capitalized = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1)
            strArr[i] = capitalized
        }
    }else{
        for(let i = 1; i<strArr.length; i++){
            let capitalized = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1)
            strArr[i] = capitalized
        }
    }
    console.log(strArr.join(""))
}

toCamelCase("the_stealth_warrior")