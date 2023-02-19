function double(str){
    str = str.replaceAll(" ", "")
    str = str.replaceAll(/[^a-zA-Z0-9 ]/g, '')
    str = str.replaceAll(/[0-9]/g, '')
    str = str.toLowerCase()
    const dontCount = ['a', 'e', 'i', 'o', 'u']
    let holderArr = []
    for(let i = 0; i < str.length; i++){
        if(dontCount.includes(str[i])){
            continue
        }else if(holderArr.includes(str[i])){
            continue
        }else{
            holderArr.push(str[i])
        }
    }
    console.log(holderArr.length)
}

double("8VTjE" )