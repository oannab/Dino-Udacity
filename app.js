
/*
loadJSON
parse Json
Dino Constructor
dino factory function = new Dino;
get human data (iife());
create shuffle(this.facts, dinoArray, human)
Dino.proto.Compare1-3(that also takes human);
tiles() {
    
    link to DOM(dinoArray+human)
    .map(){into DOM directly}
}
document.querySelector('btn'){
    tiles()
}

*/
//const urlObj =  'https://github.com/udacity/Javascript/blob/master/dino.json'
/*function loadJSON(callback) {   
*/


let dinos = []; // empty array to push the json obj into to be able to map() it into the new Object
const button = document.getElementById('btn');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    init();
});

function init() {
    loadJSON(function(response) {
        // Parse JSON string into object
        json = JSON.stringfy(response);
    });
    dinos.push(json);
    //dinos = json.Dinos;
    console.log(dinos);
    return dinos;
}

function loadJSON(callback, done) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', 'dino.json', true);
    xhr.onreadystatechange = function() {
        if (xhr.status === "200") {
            callback(xhr.responseText);
        }
    };
    //xhr.send(null);
}

/*get image
var getDinoImage = fetch(`./Dino-Udacity/images`)
    .then(response => {
        return response.blob();
    }).then(blob => {
        let image = document.getElementById('img').src = URL.createObjectURL(blob);
        dinos.push(getDinoImage.map(this.image));
        grid.append(image);
    }).catch(error => {
        console.log(error);
});
*/

// Constructor f() to create template for future dino objects - empty of information, architecture only
function Dinosaur(species, weight, height, diet, where, when, fact) { //species, weight, height, diet, where, when, fact
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    //this.image = image;
}

// store new Dino objects
const dinoArray = []; 


//create dino objects from Constructor()-template
function dinoFactory(dinos) {  
    //dinoArray.map((species, fact, weight, height, diet, where, when) => {
    const dinoArray = [];   
   /* dinos.forEach((dino) => {
        const dinoObj = new Dinosaur(
            dino.species, 
            dino.fact,
            dino.diet,
            dino.height,
            dino.weight,
            dino.where,
            dino.when
        );
        dinoArray.push(dinoObj);
    }) */
         
        

    //console.log(dinoObj.hasOwnProperty('fact'));
    //dinoArray.push(dinoObj);      
    console.log("mapping succesful");
    //console.log(dinoArray);
    console.log("end of dinoFactory")
    return dinoArray;
}; 
//console.log(`the new objects after mapping ${dinoArray}`);
dinoFactory();
console.log(dinoArray);

let human = (function () { //get data from form
        //let humanImage = getImage('./images/human.png');
    console.log("beginning of human f()")
    let inputName = document.getElementById('name').value.toLowerCase();
    let inputFeet = document.getElementById('feet').value;
    let inputInch = document.getElementById('inches').value;            
    let inputWeight = document.getElementById('weight').value;    
    let inputDiet =  document.getElementById('diet').value;
    let inputImage = './images/human.png';

    function humanName (){
        return inputName;
    }   
    function humanHeight () {
        return inputFeet, inputInch;
    }   
    function humanWeight () {
        return inputWeight;
    }
    function humanDiet () {
        return inputDiet;
    }
    function humanImage() {
        return inputImage;
    }

    console.log("all human () loaded")   
    return {
        name: humanName(),
        height: humanHeight(),
        weight: humanWeight(),
        diet: humanDiet(),
        image: humanImage()
        
    }
            
            
})();
console.log(human);
console.log(`human is a ${human.diet}`);
console.log(`dino has ${this.diet}`)


Dinosaur.prototype.compareDiet = function(human) {
    console.log("first compare");
    if (this.diet === human.diet) {
        return `Seems you and dinos ${this.diet} diet have similar tastes `
    } else {
        console.log("first compare ended");
        return `Thid dino is ${this.diet} whilst you prefer a ${human.diet}`
    }
};    
  

Dinosaur.prototype.compareHeight = function(human) {
    console.log("second compare");
    if (this.height === human.height) {
        return `Tall as any dino around`;
    } else (this.height > human.humanHeight()); {
        console.log("second compare ended");
        return `The dinosaur is ${this.height / human.height} x more taller than you!`;
    } 
};
console.log("second compare ended");

Dinosaur.prototype.compareWeight = function(human) { 
    console.log("third compare");
    debugger
    if (this.weight === human.weight) {
        return `I'm pretty sure you've entered the weight wrong`;
    } else if (this.weight > human.weight) {
        return `The dinosaur is ${this.weight / human.weight} x more heavier than you!`;
    } else {
        console.log("third compare ended");
        return `Probably an input mistake.`
    }
};        


function randomDinoFact(dinoArray, human) {
    dinoArray.splice(4, 0).concat(human);
    console.log(dinoArray);
    //let fact = dinoArray.fact;
    dinoArray.forEach(each =>{
        Math.floor(Math.random() * dinoArray.fact.length)
    });  
}      
//math.floor() as it is required a whole number(rounded) to access index as required with math.random()

//randomDinoFact(dinoArray);
/*
You can append each fact into an array.
 And randomly select from the array using 
 Math.floor(Math.random() * array.length) 
 for (let i = dinoArray.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
            var shf = fact[i];
            fact[i] = fact[j]; //re-arrange the content
            fact[j] = shf;
        }
        console.log("dino shuffling() succesful");
        return fact;
    }
*/

//tiles
function tiles(dinoArray, human) {
    
    console.log(dinoArray);

    const grid = document.getElementById('grid')
    const tile = document.createElement('div');
    grid.style.display = "flex";
    grid.innerHTML = "";
    //const img = document.createElement('img')
    
    
    dinoTiles = [] //push each tile into this array
    dinoArray.forEach((dinoArray, index)=> {
        tile.className = 'grid-item';
        tile.innerHTML = `<h3>${dinoArray.species}</h3> <img src="./images/${dinoArray.species}.png" id="img"> <p>${randomDinoFact(dinoArray)}</p></div> `;

        if (tile === 4) {
            var humanTile = document.createElement('div');
            humanTile.className = 'grid-item';
            humanTile.innerHTML = `<h3>${human.name}</h3> <img src="./images/human.png">`;
            dinoTiles.push(humanTile);
        } else if (dinoArray.species === 'Pigeon') {
            tile.innerHTML = `All birds are considered dinosaurs.`
        } else {
            return tile;
        }
        dinoTiles.push(tile);
        grid.appendChild(dinoTiles);
        dinoArray.compareDiet(human.diet);
        console.log("works")
        dinoArray.compareHeight(human.height);
        dinoArray.compareWeight(human.weight);
    });
    
};    

button.addEventListener('click', function() {
    tiles(dinoArray, human);    
});