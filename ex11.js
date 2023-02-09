function rowSumOddNumbers(n){
    let firstNum = 1 + n * (n-1)
    let holder = [firstNum]
    for (let i = 0; i <= n-1; i++){
        holder.push(holder[i]+2)
    }
    let sum = holder.reduce(function(a,b){
        return a+b
    },0)
    console.log(sum)
}



rowSumOddNumbers(42)