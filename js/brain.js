var fs = require('fs');

// FILES
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
/* @rgument > path to the file      */
/************************************/
function getJson(path){
    console.log("getJson::RETURN");
    return JSON.parse(fs.readFileSync(path, 'utf8'));
}

/********************************************/
/* initialize the list of units available   */
/* Fill the form containing that list       */
/* @rg >                                    */
/*  container = DOM element to which, the   */
/*  units list will be attached             */
/********************************************/
function initUnits(container){
    //console.log("initUnits::START");
    //console.log(process.cwd()); //display current directory
    
    //get the list of elements to display    
    var list = getJson(PATH_CONFIG);
    console.log(list.units);
    
    for (var key in list['units']){
        // preparing the li element to add to the #possibilities list
        var li = "<li name=\"" + list.units[key].type;
        li += "\" onclick=alert(\"" + list.units[key].type;
        li +=  "\") > <p class=\"plus\">+</p>" ;
        li += list.units[key].display;
        li += "</li>";
        
        container.append(li);        
    }
    //console.log("initUnits::END");
}

/******************************************/
/* Ajouter l'unité à la liste des éléments*/
/* du niveau                              */
/******************************************/
function addUnit(){
    
}

/********************************************/
/* Créer un nouveau niveau                  */
/* @rg >                                    */
/*  container = DOM element to which stuff  */
/*  is going to be attached                 */
/********************************************/
/*
{
"name" : "Final",
"music" : "son2.wav",
"map" : "terrain3",
"tutorial" : "false",
"items" : {*/

function newLevel(container){
    var levelFile = {};
    levelFile.name = "";
    levelFile.music = "";
    levelFile.map = "";
    levelFile.tutorial = "false";
    levelFile.items = {};
    levelFile.items.ennemies = [];
    levelFile.items.objects = [];
    
    /*var foo = {};
    foo.name = "foo";
    foo.type = "test";    
    levelFileHeader.items.ennemies.push(foo);*/ //just an example of how to add an object
    
    console.log(levelFile);
    
    // add that to the container
    container.append(levelFile);
}













