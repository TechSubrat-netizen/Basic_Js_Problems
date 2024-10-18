let ll=20;
let ul=50;
let a=0;
let b=1;
let c=0;
for(; ;){
    c=a+b
    if(c>ul){
        break;
    }
    if(c>=ll){
        console.log(c);
        
    }
    a=b;
    b=c;
}