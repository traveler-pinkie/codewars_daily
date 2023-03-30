function sortEmotions(arr, order){
    const emotions = {':D': 5, ':)': 4, ':|': 3, ':(': 2, 'T_T': 1,}

    arr.sort((a,b) => emotions[b] - emotions[a])

    if(!order){
        arr.reverse()
    }
    console.log(arr)
}

sortEmotions([ ':D', 'T_T', ':D', ':(' ], true)