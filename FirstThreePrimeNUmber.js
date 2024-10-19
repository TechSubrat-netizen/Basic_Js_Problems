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
for(let i=1;i<=20;i++){
    if(isPrime(i)){
        count++
        if(count<=3){
            console.log(i);
            
        }
    }
}