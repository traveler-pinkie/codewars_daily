function solve(s){
 let lowercase = []
 let uppercase = []
 let numbers = []
 let symbols = []
 for(let i = 0; i < s.length; i++){
   let value = s.charCodeAt(i)
   if(value >= 65 && value <=90){
     uppercase.push(s[i])
   }else if(value >= 97 && value <= 122){
     lowercase.push(s[i])
   }else if(value >= 48 && value <= 57){
     numbers.push(s[i])
   }else{
     symbols.push(s[i])
   }
 }
  return [uppercase.length, lowercase.length, numbers.length, symbols.length]
}