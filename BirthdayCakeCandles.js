
let a= [2,4,5,6,6];
let max = a[0];
for(let i= 0; i < a.length; i++){
    if(a[i] > max){
        max = a[i];
    }
}
console.log(max);
