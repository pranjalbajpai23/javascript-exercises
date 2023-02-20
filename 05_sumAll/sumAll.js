const sumAll = function(l,h) {
if(l<0 || typeof(l)!="number" || typeof(h)!="number" ){
    return 'ERROR';
}
let sum=0;
let start,end;
if(l<=h){
    start=l;
    end=h;
}
else{
    start=h;
    end=l;
}
for(let i=start;i<=end;++i){
    sum+=i;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
