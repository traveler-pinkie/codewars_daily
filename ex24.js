function digPow(n,p){
    let solution = 0;
    let digits = n.toString().split("");
    let realDigits = digits.map(Number);
    for(let i = 0; i < realDigits.length; i++){
        solution += realDigits[i]**p
        p++
    }
    if(!Number.isInteger(solution/n)){
        console.log('-1')
    }else{
        console.log(solution/n)

    }
}

digPow(92, 1)