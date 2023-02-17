function getSum(a, b){
  let sum = 0
  let highVal = 0
  let lowVal =0
  
  if(a>b){
     highVal = a
     lowVal = b
    }else{
      highVal=b
      lowVal = a
    }
  
  if(a==b){
    return a
    }else{
      for(let i = lowVal; i <= highVal; i++){
           sum += i
        }
      }
   return sum
}