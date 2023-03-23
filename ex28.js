function candiesToBuy(kids){
    let total = 1;
    let lastTotoal = 1;
    for(let i = kids; i > 1; i--){
        while(total % i !==0){
            total += lastTotoal
        }
        lastTotoal = total
    }
    return total
}
