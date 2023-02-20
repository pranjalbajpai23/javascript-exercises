const repeatString = (s, x) => {
    if (x == 0 || s=='') {
        return '';
    }
    else if (x == -1) {
        return 'ERROR';
    }
    else {
        for (let i = 1; i < x; ++i) {
            s += 'hey';
        }
    }
    return s;
};

// Do not edit below this line
module.exports = repeatString;
