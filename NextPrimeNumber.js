function isPrime(n){
    if(n<=1){
        return false
    }
    for(i=2;i<=Math.trunc(n/2);i++){
        if(n%i==0){
            return false
        }
    }
    return true
}
let num=19
for(let i=++num;true;i++){
    if(isPrime(i)){
        console.log(i);
        break;  
    }
}
