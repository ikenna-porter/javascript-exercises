const ftoc = function(temp) {
  let cel = (temp - 32) * (5/9);

  return Number(cel.toFixed(1));
};

const ctof = function(temp) {
  let fahr = temp * (9/5) + 32;

  return Number(fahr.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
