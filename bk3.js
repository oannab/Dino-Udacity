
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

var dinoArray = [];
var humanForm = [];
var humanData;

// Constructor f() to create template for future dino objects - empty of information, architecture only
function Dinosaur(species, weight, height, diet, where, when, fact, image) { //species, weight, height, diet, where, when, fact
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    //this.image= './images/.png';
//console.log(Dinosaur);
console.log("Dino _____ human")
};


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
    console.log("json read",dinos['Dinos']);

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

    console.log("dino array",dinoArray);
    return dinoArray;
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
function getHumanData() {
    const human = (function () { //get data from form
        //let humanImage = getImage('./images/human.png');
    console.log("beginning of human f()")
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

    console.log("all human () loaded")   
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

// store new Dino objects

//create dino objects from Constructor()-template


Dinosaur.prototype.compareDiet = function(humanData) {
    console.log("first compare");
    if (this.diet === humanData.diet) {
        return `Seems you and dino are both ${this.diet}  `
    } else {
        console.log("first compare ended");
        return `Thid dino is a ${this.diet} whilst you are a ${humanData.diet}`
    }
};    


Dinosaur.prototype.compareHeight = function(humanData) {
    console.log("second compare");
    if (this.height < humanData.height) {
        return `You're as tall as any dino around`;
    } else (this.height > humanData.height); {
        return `The dinosaur is ${Math.round(this.height / humanData.height)} x more taller than you!`;
    } 
};


Dinosaur.prototype.compareWeight = function(humanData) { 
    //console.log("third compare");
    //debugger
    if (this.weight < humanData.weight) {
        return `I'm pretty sure you've entered the weight wrong`;
    } else if (this.weight > humanData.weight) {
        return `The dinosaur is ${Math.round(this.weight / humanData.weight)}x more heavier than you!`;
    } else {
        //console.log("third compare ended");
        return `Probably an input mistake.`
    }
};        

Dinosaur.prototype.randomFact = function() { 
    //(Math.floor(Math.random() * dinoArray.length)); 
    return this.fact;
}     

//math.floor() as it is required a whole number(rounded) to access index as required with math.random()

//create grid elements
function tiles() {
    
    console.log("works")
    dinoArray.splice(4, 0, humanData);

    const grid = document.getElementById('grid');
 /*   function getFact() {
        let fact = dinoArray.foEach(dino => {
            if (dinoArray.species) {
                dinoArray.compareHeight(human.height);
                dinoArray.compareWeight(human.weight);
                dinoArray.compareDiet(human.diet);
                dinoArray.randomFact();
            }
        });
    }
    var getFact = getFact();
    */
 
    compare();
    
    function compare() {
        dinoArray.forEach((dinoArray, index)=> {

            console.log("index",index);
            if(index === 4) {
                grid.innerHTML += `
                                <div class="grid-item">
                                <h3>${humanData.name}</h3>
                                <img src="./images/human.png" alt="${humanData.name} image" />
                                </div>
                                `;
            } else if (dinoArray.species === 'pigeon') {
                grid.innerHTML += `
                                <div class="grid-item">
                                <h3>"All birds are considered dinosaurs"</h3>
                                </div>
                                `;
            }
            else{

                const compareDiet = dinoArray.compareDiet(humanData);
                const compareHeight = dinoArray.compareHeight(humanData);
                const compareWeight = dinoArray.compareWeight(humanData);
                const compareFact = dinoArray.randomFact();

                grid.innerHTML += `
                <div class="grid-item">
                <h3>${dinoArray.species}</h3>
                <img src="./images/${dinoArray.species}.png" alt="${dinoArray.species} image" />

                <p>${dinoArray.diet ? compareDiet : ""}
                ${dinoArray.weight ? compareHeight : ""}
                ${dinoArray.height ? compareWeight : ""}
                ${dinoArray.fact ? compareFact : ""}
                </p>

                </div>
                `;
                }
        });
    }
    //src="images/${dinoArray.species}.png" alt="image of ${dinoArray.species}">  <img src="${dinoArray.image}.png" id="img" />
    //id="img"  <img src="./images/${dinos.species}.png" alt="${dinos.species} image" /> alt="${dinoArray.species} image"
    
   
};     

function showGrid() {
    const button = document.getElementById('btn');
    button.addEventListener('click', (event) => {
        humanData = getHumanData();
        console.log("btn pressed")

        console.log(dinoArray);

        tiles();    
        document.getElementById("dino-compare").style.display = "none";
        console.log("after tile");
        console.log(humanData);
        event.preventDefault();
    });
};

showGrid();

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => {
    console.log("reset")
    document.getElementById('grid').style.display = "none"
    document.getElementById("dino-compare").style.display = "block";
    
});