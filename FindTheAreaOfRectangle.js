function area(d,l){
if (l>=d) return "Not a rectangle";
  return Math.round(l*(Math.sqrt(d*d-l*l))*100)/100;
}
module.exports = area;