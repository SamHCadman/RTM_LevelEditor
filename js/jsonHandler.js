var fs = require('fs');

//files
//var jsonExample = require('../json/example.json');
var PATH_CONFIG = "./js/conf/config.json";


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
    console.log("getJson::RETURN");
    return JSON.parse(fs.readFileSync(path, 'utf8'));
}

/******************************************/
/* initialize the list of units available */
/* Fill the form containing that list     */
/******************************************/
function initUnits(){
    console.log("initUnits::START");
    console.log(process.cwd()); //display current directory
    
    
    var list = getJson(PATH_CONFIG);
    console.log(list['units']);
    console.log("initUnits::END");
}