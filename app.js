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

/*References ' refs.txt' */


// empty array to store as an array data fetched from json
let dinoArray = [];
let humanData;
let getFact;
let grid = document.getElementById('grid'); 
const button = document.getElementById('btn');
const resetBtn = document.getElementById('reset');
//declare humanData to allow access from IIFE in multiple scopes

// Constructor f() to create template for future dino objects - empty of information, template only
function Dinosaur(species, weight, height, diet, where, when, fact, image) { 
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
};


document.addEventListener('DOMContentLoaded', function(event) {
    //call function which loads json data when DOM is loaded
    init();
});


function init() {
    loadJSON(function(response) {
        //get JSON string into object
        dinos = JSON.stringfy(response);
        // dinos var declared in json
    });
    //create a new array on Constructor mapping/containing all data fetched from json
    dinoArray = dinos['Dinos'].map( dino => 
        new Dinosaur(
            dino.species,
            dino.weight,
            dino.height,
            dino.diet,
            dino.where,
            dino.when,
            dino.fact
        )  
    )
    return dinoArray;
}


function loadJSON(callback, done) {
    var xhr = new XMLHttpRequest(); //object to request data from web server
    xhr.overrideMimeType('application/json');
    xhr.open('GET', 'dino.json', true); //initialize request
    xhr.onreadystatechange = function() { 
        if (xhr.status === '200') {
            callback(xhr.responseText); //returns a DOMString response as text
        }
    };
    //xhr.send(null);
} 

function getHumanData() {
    const human = (function () { 
    //get data from form
    let inputName = document.getElementById('name').value;
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

    return {
        name: humanName(),
        height: humanHeight(),
        weight: humanWeight(),
        diet: humanDiet(),
        image: humanImage()
    }      
    })();
    return human;
}

//create dino methods on Constructor()-template to compare into tiles
Dinosaur.prototype.compareDiet = function(humanData) {
    if (this.diet === humanData.diet) {
        return `Seems you and dino are both ${this.diet}s `
    } 
    return `Thid dino is a ${this.diet} whilst you are a ${humanData.diet}`
};    

Dinosaur.prototype.compareHeight = function(humanData) {
    if (this.height < humanData.height) {
        return `You're as tall as any dinosaur around. Seems like you are ${Math.round(humanData.height / this.height)}x taller than ${this.species}`;
    } else (this.height > humanData.height); {
        return `The dinosaur is ${Math.round(this.height / humanData.height)} x more taller than you!`;
    } 
};

Dinosaur.prototype.compareWeight = function(humanData) { 
    if (this.weight < humanData.weight) {
        return `I'm pretty sure you've entered the weight wrong. Looks like you're ${Math.round(humanData.weight / this.weight)}x more heavier than ${this.species}`;
    } else if (this.weight > humanData.weight) {
        return `The dinosaur is ${Math.round(this.weight / humanData.weight)}x more heavier than you!`;
    } else {
        return `Probably an input mistake.`
    }
};        

Dinosaur.prototype.dinoFact = function() {  
    return this.fact;
}     


//create grid elements
function tiles() {
    // push human object into dino array to place it at index[4] on the grid
    dinoArray.splice(4, 0, humanData); 

    function compare() {
        dinoArray.forEach((dinoArray, index)=> {
            if(index === 4) { //grid tile for human
                grid.innerHTML += `
                                <div class="grid-item">
                                    <h3>${humanData.name}</h3>
                                    <img src="./images/human.png" alt="${humanData.name} image" />
                                </div>
                                `;
            } else if (dinoArray.species === 'pigeon') { //grid tile for pigeon to contain only one description
                grid.innerHTML += `
                                <div class="grid-item">
                                    <h3>Pigeon</h3>
                                    <img src="./images/pigeon.png" alt="${dinoArray.species} image" />
                                    <p>"All birds are considered dinosaurs"</p>
                                </div>
                                `;
            }
            else{
                const compareDDiet = dinoArray.compareDiet(humanData);
                const compareDHeight = dinoArray.compareHeight(humanData);
                const compareDWeight = dinoArray.compareWeight(humanData);
                const compareDFact = dinoArray.dinoFact();

                const randomFact= [
                    compareDHeight, 
                    compareDWeight,
                    compareDDiet, 
                    compareDFact,
                    ` The ${dinoArray.species} lived in ${dinoArray.where}`,
                    ` The ${dinoArray.species} lived during ${dinoArray.when}`
                ];

                const randomIndex = Math.floor(Math.random() * randomFact.length)
                //tile to contain comparison f() if grid != pigeon || human          
                grid.innerHTML += `
                <div class="grid-item">
                    <h3>${dinoArray.species}</h3>
                    <img src="./images/${dinoArray.species}.png" alt="${dinoArray.species} image" />
                    <p>${randomFact[randomIndex]}</p>
                </div>
                `; 
            }
        });
    }
    compare();
};     


function showGrid() {
    button.addEventListener('click', (event) => {
        //assign the getHumanData() to global variable
        humanData = getHumanData(); 

        //delete form from window once grid has been initialized
        document.getElementById('dino-compare').style.display = "none";
        
        //generate tiles
        tiles();

        event.preventDefault();
    });
};


resetBtn.addEventListener('click', () => {
    document.getElementById('grid').style.display = "none"
    document.getElementById('dino-compare').style.display = "block";
    window.location.reload();
    
});

showGrid();