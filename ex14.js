Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
    value:function numberOfOccurrences(element){
    let count = 0
    for(let i = 0; i < this.length; i++){
        if(this[i] == element){
            count++
        }
    }
    return count
  }
});


let arr2 = [0, 1, 2, 2, 3]
console.log(arr2.slice().numberOfOccurrences(2))





