function findScreenHeight(width, ratio) {
    var num = ratio.split(":");
    var newnum = width*(num[1]/num[0]);
    return width + "x" + newnum;
}
module.exports = findScreenHeight;