function iam(input, n=0){
    if (input){
        return "I am " + "very ".repeat(n) + input
    }else{
     return x => iam(x, n+1)   
    }

}

console.log(iam()()("happy"))



// The code defines a function named iam that takes two parameters: input and n, where input is a string and n is an 
// integer with a default value of 0.

// Here's what the function does:

// If input is truthy (i.e., not null, undefined, 0, false, NaN, or an empty string), it returns the string "I am " 
// followed by the word "very" repeated n times (using the repeat() method) and then followed by the input string.

// If input is falsy (i.e., null, undefined, 0, false, NaN, or an empty string), it returns another function that 
// takes one parameter, x. This returned function will call iam() again with x as the input parameter and n+1 as the 
// n parameter.

// When iam() is called with no arguments (i.e., iam()), it returns a function due to the else statement in the code.
//  That returned function is also called immediately with no arguments (i.e., iam()()), which returns another function 
// due to the same else statement.

// Finally, that returned function is called with the string "happy" as its argument (i.e., iam()()("happy")). At this 
// point, the first if statement in the code will be executed and the string "I am very happy" will be returned as the 
// final result, since n is 0 by default and thus the "very " string is not repeated. Therefore, the console will log 
// "I am very happy".


// The else statement in the iam function contains a function that takes one parameter, x. This function returns 
// the result of calling iam again with x as the input parameter and n+1 as the n parameter. This returned function 
// can be called again with another argument, which will be passed to the next level of iam function.

// The main idea behind the else statement is to allow the iam function to be called recursively until an actual input 
// string is provided. Each time the iam function is called recursively (i.e., when input is falsy), n is incremented 
// by 1. This means that the string "very " will be repeated one more time for each level of recursion.

// For example, when iam is called with no arguments (iam()), it returns a function that takes one argument (x). 
// When that returned function is called with the string "happy" (iam()()("happy")), it returns another 
// function that also takes one argument. This function is equivalent to iam("happy", 1), because n was 
// incremented by 1 during the first level of recursion. This second-level call to iam returns a function 
// that also takes one argument, and so on, until an actual string input is provided.

// Once an actual string input is provided, the first if statement in the iam function is executed instead 
// of the else statement, and the final result is returned. The result is a string that starts with "I am ", 
// followed by the word "very" repeated n times (where n is the number of levels of recursion that occurred 
// before an actual input string was provided), and then followed by the actual input string.