/********************************/
/* Return current hour and date */
/* Purpose is only for tests    */
/********************************/
function getCurrentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    var hh = today.getHours();
    var min = today.getMinutes();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    console.log("Date processed, currently returning it...");
    return dd + '/' + mm + '/' + yyyy + ' ' + hh + ':' + min;
}

/************************************/
/* Return the content of a JSON file*/
/* argument > path to the file      */
/************************************/
function getJson(path){
    $.ajax({
        url: path,
        success: function (data) {
            var obj = JSON.parse(data);
            console.log(obj);
        }
    });
}