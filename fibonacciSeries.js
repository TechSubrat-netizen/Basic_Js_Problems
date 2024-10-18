// print first 10 fibonacci series.
let a=0;
let b=1
console.log(a);
console.log(b);
let c=0;
for(let i=3;i<=8;i++){
    c=a+b;
    a=b;
    b=c;
    console.log(c);
    
}