//find second highestnumber from 1 to 20
function isPrime(n){
    if(n<=1)return false
    for(let i=2;i<=Math.trunc(n/2);i++){
        if(n%i==0){
            return false
        }
    }
    return true
}
let count=0
for(i=20;i>=1;i--){
    if(isPrime(i)){
        count++
        if(count==2){
            console.log(i);
        }
    }
}