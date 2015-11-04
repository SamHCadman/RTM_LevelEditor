var fs = require('fs');

// FILES
var PATH_CONFIG = "./js/conf/config.json";
// variables
var levelFile = {};
var unitList;
var contentDisplay;

//TODO
// 1) to keep the scroll bottom http://stackoverflow.com/questions/18614301/keep-overflow-div-scrolled-to-bottom-unless-user-scrolls-up 

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
}

/********************************************/
/* initialize the different elements of the */
/* interface (json object, choice for units)*/
/* @rg >                                    */
/*  listDisplay = DOM element to which, the */
/*  units list will be attached             */
/*  jsonDisplay = DOM element to display the*/
/*  curent level                            */
/********************************************/
function init(listDisplay, jsonDisplay){
    //console.log("init::START");
    //console.log(process.cwd()); //display current directory
    
    // initialisation of the elements we'll use for the display
    unitList = listDisplay;
    contentDisplay = jsonDisplay; 
    
    initJson(); //initalization of  JSON object
    
    //get the list of elements to display    
    var list = getJson(PATH_CONFIG);    
    // preparing each element and add it to the #possibilities list
    for (var key in list['units']){        
        var li = "<li name=\"" + list.units[key].type;
        li += "\" onclick=addUnit(\"" + list.units[key].type;
        li +=  "\") > <p class=\"plus\">+</p>" ;
        li += list.units[key].display;
        li += "</li>";        
        unitList.append(li);        
    }
    
    //console.log("init::END");
}

/******************************************/
/* Ajouter l'unité à la liste des éléments*/
/* du niveau                              */
/* @rg >                                  */
/*  unit = the unit to add                */
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
    
    //managing the display of the 
    clean(contentDisplay);
    //contentDisplay.append(JSON.stringify(levelFile));
    displayLevel();
    console.log(levelFile);
}

/********************************************/
/* Set up the display of the JSON object    */
/********************************************/
function displayLevel(){
    contentDisplay.append(JSON.stringify(levelFile));
    
}


/********************************************/
/* Créer un nouveau niveau                  */
/* @rg >                                    */
/*  container = DOM element to which stuff  */
/*  is going to be attached                 */
/********************************************/
function newLevel(){
    clean(contentDisplay); //remove previous content    
    initJson(); // re-initialize JSON object    
    // add that to the container
    //contentDisplay.append(JSON.stringify(levelFile));
    displayLevel();
}

/************************************************/
/* Remove all childs of the specified element   */
/* @rg >                                        */
/*  container = DOM element to empty            */  
/************************************************/
function clean(container){
    container.html("");    
}

// return current date and time, just for tests
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









