//first we create a list for alphabet and a list of vowels to use for comparison
//next we will change everything to lowercase use the split method to convert into an array
//we then loop through it can find the letters index in alphabet. and replace it with the next letter up
//we then check if any of the new letters are vowels and then capitalize if true
//we then use the join  method and return the string



function changer(str) {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65)
    const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase())
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let srtArr = str.toLowerCase().split("")
    for (let i = 0; i < srtArr.length; i++) {
        if (isNaN(srtArr[i])) {
            let currentIndex = alphabet.indexOf(srtArr[i])
            if(srtArr[i]==='z'){
                srtArr[i] = 'a'
            }else{
            srtArr[i] = alphabet[currentIndex + 1]
            }
            if (vowels.includes(srtArr[i])) {
                srtArr[i] = srtArr[i].toUpperCase()
            }
        }

    }
    return(srtArr.join(""))
}

changer('Cat30')