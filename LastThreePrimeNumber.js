//print last three prime number from 1 to 20
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
for(let i=20;i>=1;i--){
    if(isPrime(i)){
        count++
        console.log(i);
        if(count==3){
            break;
        }
        
    }
}