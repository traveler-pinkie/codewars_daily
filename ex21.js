function iam(input, n=0){
    if (input){
        return "I am " + "very ".repeat(n) + input
    }else{
     return x => iam(x, n+1)   
    }

}

console.log(iam()()("happy"))



