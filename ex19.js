function multiplicationTable(size){
    let mainArr = []
    let subArr = []
    let position = 1
    for(let i = 1; i <= size +1; i++){
        if(mainArr.length < size){
            if(subArr.length == size){
                mainArr.push(subArr)
                subArr = []
                i = 0
                position++
            }else{
                subArr.push(i*position)
            }
        }
    }
    console.log(mainArr)

}

multiplicationTable(3)