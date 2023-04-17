function chooseBestSum(t,k,ls){
    let maxSum = -1
    const n = ls.length

    function combinations(arr, k){
        const result = []
        if (k===0){
            return [[]]
        }
        if(arr.length === 0){
            return []
        }
        const [first, ... rest] = arr
        const combinatiosWithoutFirst = combinations(rest, k)
        const combinationsWithFirst = combinations(rest, k- 1).map(combination => [first, ...combination])
        return [...combinatiosWithoutFirst, ...combinationsWithFirst]
    }
    const combinationsOfK = combinations(ls, k)

    for(const combination of combinationsOfK){
        const sum = combination.reduce((acc, val) => acc + val, 0)
        if(sum <= t && sum > maxSum){
            maxSum = sum
        }
    }
    return maxSum === -1 ? null: maxSum
}
let ts = [91, 74, 73, 85, 73, 81, 87]

let value = chooseBestSum(230, 3, ts)
console.log(value)