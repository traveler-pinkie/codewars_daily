function alphabetWar(fight){
    let leftSide = ['s', 'b', 'p', 'w']
    let rightSide = ['z', 'd', 'q', 'm']
    let rightSideValue = 0
    let leftSideValue = 0

    mainArr = fight.split("")
    for(let i = 0; i < mainArr.length; i++){
        if (leftSide.includes(mainArr[i])){
            leftSideValue += leftSide.indexOf(mainArr[i])+1
        }else if(rightSide.includes(mainArr[i])){
            rightSideValue += rightSide.indexOf(mainArr[i])+1
        }
    }

    if(leftSideValue > rightSideValue){
        console.log('left side wins')
    }else if(leftSideValue < rightSideValue){
        console.log('right side wins')
    }else{
        console.log('lets fight again')
    }
}

alphabetWar("zdqmwpbs")