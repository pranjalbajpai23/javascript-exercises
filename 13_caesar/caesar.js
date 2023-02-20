function charCodeCapital(code,shift){
    if(shift>26){
        shift=shift%26;
    }
    if(code+shift>90){
        return code+shift-26
    }
    else if(code+shift<65){
        return code +shift+26
    }
    else{
        return code+shift
    }
}
function charCodeSmall(code,shift){
    if(shift>26){
        shift=shift%26;
    }
    if(code+shift>122){
        return code+shift-26
    }
    else if(code+shift<97){
        return code +shift+26
    }
    else{
        return code+shift
    }
}



const caesar = (string, shift) =>{
    let cipher="";
    const format="!@#$%^&*()-~,' '\s";
    for(var i=0;i<string.length;++i){
        if((format.includes(string[i])))
            cipher+=string[i];

        else if('A'<=string[i] && string[i]<='Z'){
            const char=charCodeCapital(string.charCodeAt(i),shift);
            cipher+=String.fromCharCode(char)
        }
        else{
            const char=charCodeSmall(string.charCodeAt(i),shift);
            cipher+=String.fromCharCode(char);
        }
    }

    return cipher
};

// Do not edit below this line
module.exports = caesar;

// W=87
// 87+shift ie 87+5=92
//92-90=2
//2+65=67 
//67=B hence W will be replaced by B
//B=67
//67-5=62
//65-62=3
//90-3=87
//87=W hence B will be replaced by W