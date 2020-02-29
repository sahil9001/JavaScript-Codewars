function listSquared(m, n) {
    // your code
    var isSquare = function (n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
};
    var arr = [];
    for(var i=m;i<=n;i++){
      var sum = 0;
      for(var k=1;k<=i/2;k++) if(i%k===0) sum += k*k;
      sum += i*i;
      if(isSquare(sum) === true){
         var obj = [];
         obj.push(i);
         obj.push(sum);
         arr.push(obj);
      }
    }
    return arr;
}