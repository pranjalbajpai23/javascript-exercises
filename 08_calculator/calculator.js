const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let sum=0;
	for(let i=0;i<arr.length;i++){
      sum+=arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let mul=1;
	for(let i=0;i<arr.length;i++){
      mul*=arr[i];
  }
  return mul;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let fact=1;
	for(let i=1;i<=a;i++){
      fact*=i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
