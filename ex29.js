function shorterestTime(n,m,[a,b,c,d]) {    
    if(n==0){
        return 0
    }
   return Math.min(
        //walking
        n*d,
        //elevator to john
        Math.abs(n-m)*a + 2*b + c + n*a,
        // john to elevator
        Math.abs(n-m)*d + 2*b + c + m*a 
    )
}

console.log(shorterestTime(4,4,[1,2,3,10]))