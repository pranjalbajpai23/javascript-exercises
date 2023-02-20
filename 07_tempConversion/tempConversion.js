const convertToCelsius = (f)=> {
  f-=32;
  f*=(5/9);
  f=Math.round(f * 10) / 10;
  return f;

};

const convertToFahrenheit = (c)=>{
  c*=(9/5);
  c=Math.round(c * 10) / 10;
  c+=32;
  return c;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
