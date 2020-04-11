reverse = function(array) {
    var narr = [];
    for(var key=array.length-1;key>=0;key--){
      narr.push(array[key]);
    }
    return narr
  }
  module.exports = reverse;