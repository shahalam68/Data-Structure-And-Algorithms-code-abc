// Checking SumZero problem

// [-5,-4,-3,-2,-0,2,4,6,8] -> input
const sumZero = (arr) => {
    for(let i of arr){
        for(let j = 0 ; j < arr.length; j++ )
        if(i + arr[j] === 0){
            return [i, arr[j]]
        }
    }
}

const result = sumZero([-5,-4,-3,-2,-0,2,4,6,8] )
console.log(result);