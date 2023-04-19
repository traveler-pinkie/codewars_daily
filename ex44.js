function findUniq(arr){
    const arrLen = arr.length
    const firstEle = arr[0]
    const lastEle = arr[arrLen-1]
    let sum  = 0
    let y
    arr.map(x => sum += x)
    if(firstEle === lastEle){
        y = sum - (arrLen-1)*firstEle
        return(y)
    }
    else if(firstEle != arr[1] && lastEle === arr[arrLen-2]){
        return(firstEle)
    }
    else if(firstEle === arr[1] && lastEle != arr[arrLen-2]){
        return(lastEle)
    }
}

findUniq([  0, 0, 1 ])