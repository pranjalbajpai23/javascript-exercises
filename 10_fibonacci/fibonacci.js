const fibonacci = function(n) {
    if(typeof(n)!="number"){
        Number(n);
    }
    if(n<0){
        return 'OOPS';
    }
    let f=new Array(n + 2);
    f[0] = 0;
    f[1] = 1;
    for(let i = 2; i <= n; i++){
       f[i] = f[i - 1] + f[i - 2];
    }
    return f[n];
    


};

// Do not edit below this line
module.exports = fibonacci;
