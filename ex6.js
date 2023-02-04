function numberJoy(n){
    //Defining varialbes 
    let sum = 0;
    n = n.toString()
    //Using a for loop to sum up the digits and getting the sum
    for(let i = 0; i < n.length; i++){
        sum += parseInt(n[i])
    }
    //getting the reverse Sum
    sumReverse = parseInt(sum.toString().split("").reverse().join(""))
    //Multiplying the two values to see if it is a Harshad number
    finalProd = sum * sumReverse
    //creating a if conditional to return final value
    if( finalProd == n){
        return true
    }
    return false
}

console.log(numberJoy(81))