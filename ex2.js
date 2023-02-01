function largest(n, array){
  highArr = []
  for (let i = 0; i < n; i++){
      highVal = Math.max(...array)
      highArr.unshift(highVal)
      highIndex = array.indexOf(highVal)
      if(highIndex !== -1){
        array.splice(highIndex,1)
      }
  }
  return highArr
}


console.log(largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5]))