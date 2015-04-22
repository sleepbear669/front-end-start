/**
 * Created by sleepbear on 2015-04-20.
 */
var htmlSpecialChars = function(string, reverse) {

    var specialChars = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "\"": "&quot;"
        },
        x;

    if (typeof(reverse) != "undefined") {
        reverse = [];
        for (x in specialChars)
            reverse.push(x);

        reverse.reverse();

        for (x = 0; x < reverse.length; x++)
            string = string.replace(
                new RegExp(specialChars[reverse[x]], "g"),
                reverse[x]
            );
        return string;
    }


    for (x in specialChars)
        string = string.replace(new RegExp(x, "g"), specialChars[x]);


    return string;
};