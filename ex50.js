function hero(bullets, dragons){
    if(dragons*2 <= bullets){
        return true
    }
    return false
}

console.log(hero(100,40))