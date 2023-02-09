function convertHashToArray(hash){
  let mainArr = []
  for (const[key, value] of Object.entries(hash)){
      if(value.typeOf == Number){
        let subArr = [key, value]
        mainArr.push(subArr)
      }
      let subArr = [key, value]
      mainArr.push(subArr)
  }
  return mainArr.sort()
}