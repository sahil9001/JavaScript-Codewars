function pattern(n){
    var output="";
      // Happy Coding ^_^
      for(var i=1;i<=n;i++){
        for(var k=n;k>=i;k--){
          output += k;
         }
          if(i!=n)output += "\n";
      }
    return output;
   }
  module.exports = pattern;