// alternative Five Fibonaccinumber
let n=5;
let a=0;
let b=1;
console.log(a);
let c=0
for(let i=3;i<n*2;i++){
    c=a+b
    if(i%2!=0){
        console.log(c);
        
    }
    a=b;
    b=c;
    
}