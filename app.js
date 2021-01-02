//const urlObj =  'https://github.com/udacity/Javascript/blob/master/dino.json'
/*function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'dino.json', true); 
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            resolve(callback(xobj.responseText));
          }
          console.log("loadJ f() loaded")  
    };
    //xobj.send(null);  
 }

 function init() {
    loadJSON( (response) => {
        // Parse JSON string into object
        var data = JSON.parse(response);
        console.log(data);
   
        // Place the rest of your code here, here's an example
        console.log('I have the JSON here, I can use it now');
        var dinoSpecies = data.species;
        console.log('I am', dinoSpecies);
     });
   }
 
   init(); */

//dinos var has been already declared in JSON file
const button = document.getElementById('btn');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    init();
});

function init() {
    loadJSON(function(response) {
        // Parse JSON string into object
        dinos = JSON.stringfy(response);
    });

    //dinos = json.Dinos;
    console.log(dinos);
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

const dinoArray = [];

function dinoFactory() {
    //dinoArray.map((species, fact, weight, height, diet, where, when) => {
    let dinoObj = new Dinosaur(dinos);
    dinoObj.map((dinos) => 

            dinos.species, 
            dinos.fact, 
            dinos.height, 
            dinos.weight, 
            dinos.diet, 
            dinos.where, 
            dinos.when,
        
    ); 
    dinoArray.push(dinoObj);
    dinoArray.splice(4, 0, human);
    console.log("mapping succesful");
    console.log(dinoArray);
    console.log("end of dinoFactory")
}; 

dinoFactory();

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




Dinosaur.prototype.compareDiet = function(human) {
    console.log("first compare");
    if (this.diet === human.humanDiet()) {
        return `Seems you and dinos ${this.diet} diet have similar tastes `
    } else {
        console.log("first compare ended");
        return `Thid dino is ${this.diet} whilst you prefer a ${human.humanDiet()}`
    }
};    
  

Dinosaur.prototype.compareHeight = function(human) {
    console.log("second compare");
    if (this.height === human.humanHeight()) {
        return `Tall as any dino around`;
    } else (this.height > human.humanHeight()); {
        console.log("second compare ended");
        return `The dinosaur is ${this.height / human.humanHeight()} x more taller than you!`;
    } 
};
console.log("second compare ended");

Dinosaur.prototype.compareWeight = function(human) { 
    console.log("third compare");
    debugger
    if (this.weight === human.humanWeight()) {
        return `I'm pretty sure you've entered the weight wrong`;
    } else if (this.weight > human.humanWeight()) {
        return `The dinosaur is ${this.weight / humanData.humanWeight()} x more heavier than you!`;
    } else {
        console.log("third compare ended");
        return `Probably an input mistake.`
    }
};        


function randomDinoFact(dinoArray) {
    //dinoArray.splice(4, 0, human);
    console.log(dinoArray);
    let fact = dinoArray.fact;
    for (let i = dinoArray.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
            var shf = fact[i];
            fact[i] = fact[j]; //re-arrange the content
            fact[j] = shf;
        }
        console.log("dino shuffling() succesful");
        return fact;
    } 

randomDinoFact();



//tiles
function tiles() {
    
    console.log(dinoArray);

    const grid = document.getElementById('grid')
    const tile = document.createElement('div');
    //const img = document.createElement('img')
    
    
    tiles = [] //push each tile into this array
        dinoArray.forEach((dinoArray, index)=> {
            tile.className = 'grid-item';
            tile.innerHTML = `<h3>${dinoArray.species}</h3> <img src="./images/${dinoArray.species}.png" id="img"> <p>${dinoArray.fact}</p></div> `;
    
            if (index === 4) {
                var humanTile = document.createElement('div');
                humanTile.className = 'grid-item';
                humanTile.innerHTML = `<h3>${human.name}</h3> <img src="./images/human.png">`;
                tiles.push(humanTile);
            } else if (dinoArray.species === 'Pigeon') {
                tile.innerHTML = `All birds are considered dinosaurs.`
            } else {
                return tile;
            }
            tiles.push(tile);
        });
        grid.appendChild(tiles);
    
    grid.appendChild(tile);
}

tiles();

button.addEventListener('click', function() {
    dinoArray.map(each => {
        
    })
})

/* ARCH
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