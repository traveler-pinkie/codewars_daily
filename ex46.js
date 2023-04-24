//first we will run a for loop and convert each element into the ascii code
//we then compare the value to the given value and see if they match.
//if they match at 1 to the mini-win counter
//once all the sub-arrays are done compare the mini-wins counter to the win counter
//if greater then or equal return winner
//else return loser


function bingo(ticket, win){
    let count = 0
    ticket.forEach(subArr => {
        let elements = subArr[0]
        for(let i = 0 ; i < elements.length; i++){
            charCode = elements[i].charCodeAt()
            if(charCode === subArr[1]){
                count++
                break
            }
        }
    });
        if(count >= win){
            return('Winner!')
        }else{
            return('Loser!')
        }
}

bingo([['ABC', 65], ['HGR', 82], ['BYHT', 74]], 2)