function findMiddle(str){
    str = str.split("");
    str = str.filter(item =>{ return (parseInt(item) == item);});
    var mul = 1;
    for(var key in str){
        mul *= parseInt(str[key]);
    }
    mul = (""+mul).split("");
    console.log(mul.length);
    if(mul.length%2!=0){
      return parseInt(mul[parseInt(mul.length/2)]);
    }
    else{
      return parseInt(mul[parseInt(mul.length/2)-1]+mul[parseInt(mul.length/2)]);
    }
  }
module.exports = findMiddle;  