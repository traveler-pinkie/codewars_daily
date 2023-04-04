function towerBuilder(nFloors) {
    towerArr = []
    let maxWidth = nFloors * 2 - 1
    let i = 1;
    while(i <= nFloors){
        let spaces = " ".repeat((maxWidth - (i*2-1))/2)
        let star = "*".repeat(i*2-1)
        towerArr.push(spaces + star + spaces)
        i++
    }
    return(towerArr)
}

towerBuilder(3)