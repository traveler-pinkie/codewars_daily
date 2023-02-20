

function orderedCount(input){
    let counts = {}
    for(let i = 0; i < input.length; i++){
        let char = input[i];
        if(counts[char]){
            counts[char]++
        }else{
            counts[char] = 1
        }
    }
    return [...new Set(input)].map(char => [char, counts[char]])
}


console.log(orderedCount("233312"))

