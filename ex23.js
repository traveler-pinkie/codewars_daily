String.prototype.camelCase=function(){
    let arr =  this.split(" ")
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
    }
    console.log(arr.join(""))
}  

"test case".camelCase()
"camel Case method".camelCase()