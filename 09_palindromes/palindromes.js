const palindromes = (str) =>{
    str=str.toLowerCase();
    str=str.replace(/[^a-zA-Z]/g, "");
    str=str.replace(/ /g, "");
    str=str.trim();
    //console.log(str);
    let arr=str.split('');
    let i=0;
    let j=arr.length-1;
    while(i<j){
        if(arr[i]!==arr[j]){
            return false;
        }
        i++;
        j--;

    }
return true;

};

// Do not edit below this line
module.exports = palindromes;
