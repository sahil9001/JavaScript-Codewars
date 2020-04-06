function simplify(number) {
    var arr = [];
    while (number != 0) {
        var rem = number % 10;
        arr.push(rem);
        number = Math.floor(number / 10);
    }
    var str = "";
    for (var i = arr.length - 1; i >= 0; i--) {
        if (i == 0) {
            if (arr.length === 1) str += arr[i];
            else {
                if (arr[i] != 0)
                    str += arr[i];
                else {
                    var splitString = str.split(""); // var splitString = "hello".split("");
                    console.log(splitString);
                    splitString.pop();
                    var joinArray = splitString.join("");
                    console.log(joinArray);
                    str = joinArray;
                }
            }
        }
        else {
            if (arr[i] !== 0) str += arr[i] + "*" + Math.pow(10, i) + "+";
        }
    }

    return str;
}
module.exports = simplify;