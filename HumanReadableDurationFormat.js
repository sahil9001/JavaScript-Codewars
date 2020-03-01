function formatDuration(seconds) {
    // Complete this function
    function buildString(value, unit) {
        if (value > 0) {
            return value + ' ' + unit + (value > 1 ? 's' : '') + ', ';
        }
        return '';
    }
    var str = "";
    if (seconds === 0) return 'now';
    else {
        // console.log(seconds);
        var years = Math.floor(seconds / 31536000);
        seconds = seconds % 31536000;
        var days = Math.floor(seconds / 86400);
        seconds = seconds % 86400;
        var hours = Math.floor(seconds / 3600);
        seconds = seconds % 3600;
        var minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;
        str += buildString(years, 'year');
        str += buildString(days, 'day');
        str += buildString(hours, 'hour');
        str += buildString(minutes, 'minute');
        str += buildString(seconds, 'second');
        var idx = str.lastIndexOf(', ');
        str = str.substring(0, idx);


        idx = str.lastIndexOf(', ');
        if (idx > 0) {
            str = str.substring(0, idx) + ' and ' + str.substring(idx + 2);
        }

        return str;
    }
}
