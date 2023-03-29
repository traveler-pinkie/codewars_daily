function removeParentheses(s){
    let stack = []
    let result = ''
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            stack.push(i)
        }else if(s[i]===')'){
            if(stack.length > 0){
                stack.pop()
            }else{
                stack.push(i)
            }
        }else if(stack.length === 0){
            result += s[i]
        }
    }
    return result;
}

console.log(removeParentheses("(first group) (second group) (third group)"))