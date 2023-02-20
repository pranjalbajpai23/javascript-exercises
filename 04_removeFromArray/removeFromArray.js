const removeFromArray =(arr, ...theArgs) => {
    let idx=-1;
    for (const arg of theArgs) {
      idx=arr.indexOf(arg);	
      if(idx!==-1)
        arr.splice(idx,1);
    }
    return arr;  
};

// Do not edit below this line
module.exports = removeFromArray;
