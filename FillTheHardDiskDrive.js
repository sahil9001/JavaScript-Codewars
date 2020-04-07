function save(sizes, hd) {
    var sum=0,c=0;
    for(var key in sizes){
      if(sum<hd){
          sum += sizes[key];
          if(sum<=hd) c++;
          else break;
      }
    }
    return c;
  }
module.exports = save;