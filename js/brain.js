var fs = require('fs');

// FILES
var PATH_CONFIG = "./js/conf/config.json";
// variables
var levelFile = {};

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
    return JSON.parse(fs.readFileSync(path, 'utf8'));
}

/*************************************/
/* Init the JSON object representing */
/* the level.                        */
/*************************************/
function initJson(){
    levelFile.name = "";
    levelFile.music = "";
    levelFile.map = "";
    levelFile.tutorial = "false";
    levelFile.items = {};
    levelFile.items.ennemies = [];
    levelFile.items.objects = [];
    
    console.log(levelFile);
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
    //console.log(list.units);
    
    for (var key in list['units']){
        // preparing the li element to be added to the #possibilities list
        var li = "<li name=\"" + list.units[key].type;
        li += "\" onclick=addUnit(\"" + list.units[key].type;
        li +=  "\") > <p class=\"plus\">+</p>" ;
        li += list.units[key].display;
        li += "</li>";
        
        container.append(li);        
    }
    
    initJson(); //so the JSON object is initialized
    //console.log("initUnits::END");
}

/******************************************/
/* Ajouter l'unité à la liste des éléments*/
/* du niveau                              */
/******************************************/
function addUnit(unit){
    var newItem = {};
    newItem.type = unit;
    newItem.position_seconds = 0;
    newItem.position_x = 0;
    
    switch(unit){
        case "health":
        case "invicibility":
        case "power":
            levelFile.items.objects.push(newItem);
            break;
        default:
            levelFile.items.ennemies.push(newItem);
            break;
    }

    console.log(levelFile);
}

/********************************************/
/* Créer un nouveau niveau                  */
/* @rg >                                    */
/*  container = DOM element to which stuff  */
/*  is going to be attached                 */
/********************************************/
function newLevel(container){
    clean(container); //remove previous content
    
    initJson(); // initialise the JSON object
    
    // add that to the container
    container.append("<p>" + JSON.stringify(levelFile) + "</p>");
}

/************************************************/
/* Remove all childs of the specified element   */
/* @rg >                                        */
/*  container = DOM element to empty            */  
/************************************************/
function clean(container){
    container.html("");    
}











