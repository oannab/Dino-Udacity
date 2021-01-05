
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
///*
// const dinos =  [
//     {
//         "species": "Triceratops",
//         "weight": 13000,
//         "height": 114,
//         "diet": "herbavor",
//         "where": "North America",
//         "when": "Late Cretaceous",
//         "fact": "First discovered in 1889 by Othniel Charles Marsh"
//     },
//     {
//         "species": "Tyrannosaurus Rex",
//         "weight": 11905,
//         "height": 144,
//         "diet": "carnivor",
//         "where": "North America",
//         "when": "Late Cretaceous",
//         "fact": "The largest known skull measures in at 5 feet long."
//     },
//     {
//         "species": "Anklyosaurus",
//         "weight": 10500,
//         "height": 55,
//         "diet": "herbavor",
//         "where": "North America",
//         "when": "Late Cretaceous",
//         "fact": "Anklyosaurus survived for approximately 135 million years."
//     },
//     {
//         "species": "Brachiosaurus",
//         "weight": 70000,
//         "height": "372",
//         "diet": "herbavor",
//         "where": "North America",
//         "when": "Late Jurasic",
//         "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
//     },
//     {
//         "species": "Stegosaurus",
//         "weight": 11600,
//         "height": 79,
//         "diet": "herbavor",
//         "where": "North America, Europe, Asia",
//         "when": "Late Jurasic to Early Cretaceous",
//         "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
//     },
//     {
//         "species": "Elasmosaurus",
//         "weight": 16000,
//         "height": 59,
//         "diet": "carnivor",
//         "where": "North America",
//         "when": "Late Cretaceous",
//         "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
//     },
//     {
//         "species": "Pteranodon",
//         "weight": 44,
//         "height": 20,
//         "diet": "carnivor",
//         "where": "North America",
//         "when": "Late Cretaceous",
//         "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
//     },
//     {
//         "species": "Pigeon",
//         "weight": 0.5,
//         "height": 9,
//         "diet": "herbavor",
//         "where": "World Wide",
//         "when": "Holocene",
//         "fact": "All birds are living dinosaurs."
//     }
// ]
//*/

//let dinos = []; // empty array to push the json obj into to be able to map() it into the new Object
var dinoArray = [];
var humanForm = [];
var humanData;
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
            dino.fact,
            dino.diet,
            dino.height,
            dino.weight,
            dino.where,
            dino.when
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
console.log(Dinosaur);
console.log("Dino _____ human")

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


Dinosaur.prototype.compareDiet = function(humanDiet) {
    console.log("first compare");
    if (this.diet === humanDiet) {
        return `Seems you and dinos ${this.diet} diet have similar tastes `
    } else {
        console.log("first compare ended");
        return `Thid dino is a ${this.diet} whilst you prefer a ${humanDiet}`
    }
};    


Dinosaur.prototype.compareHeight = function(humanHeight) {
    console.log("second compare");
    if (this.height > humanHeight) {
        this.fact = humanHeight;
        return `Tall as any dino around`;
    } else (this.height > humanHeight); {
        console.log("second compare ended");
        return `The dinosaur is ${this.height / humanHeight} x more taller than you!`;
    } 
};


Dinosaur.prototype.compareWeight = function(humanWeight) { 
    console.log("third compare");
    //debugger
    if (this.weight > humanWeight) {
        return `I'm pretty sure you've entered the weight wrong`;
    } else if (this.weight > humanWeight) {
        return `The dinosaur is ${this.weight / humanWeight} x more heavier than you!`;
    } else {
        console.log("third compare ended");
        return `Probably an input mistake.`
    }
};        

/*
function randomDinoFact(dinoArray) {
    //dinoArray.splice(4, 0, human);
    console.log(dinoArray);
    let fact = dinoArray.fact;
    dinoArray.forEach(fact =>{
        Math.floor(Math.random() * fact.length)
        console.log("shuffled")
    });  
    return fact;
}     
*/
//math.floor() as it is required a whole number(rounded) to access index as required with math.random()

//tiles
function tiles() {
    
    console.log("works")
    
    console.log(dinoArray, humanData);
    const grid = document.getElementById('grid');
    // let fact = dinoArray.map(dino => {
    //     if (dinoArray.species) {
    //         dinoArray.compareHeight(human.height);
    //         dinoArray.compareWeight(human.weight);
    //         dinoArray.compareDiet(human.diet);
    //         dinoArray.fact(Math.floor(Math.random() * dinoArray.fact.length))
    //     }
    // });
    

    dinoArray.forEach((dinoArray, index)=> {
        if(index === 4) {
            grid.innerHTML = `<h3>${humanData.name}</h3> <img src="./images/human.png">`;
        } else if (dinoArray.species === 'Pigeon') {
            grid.innerHTML = `All birds are considered dinosaurs.`
        }
        else{
            var compDiet = dinoArray.compareDiet(humanData);
            var compHeight = dinoArray.compareHeight(humanData);
            var compWeight = dinoArray.compareWeight(humanData);
            //var compFact = randomDinoFact(dinoArray);
        }
    });
    grid.innerHTML = `<h3>${dinoArray.species}</h3> 
    <img src="./images/${dinoArray.species}.png" id="img"> 
    <p>${dinoArray.diet ? compDiet : ""} 
    ${dinoArray.height ? compHeight : ""}
    ${dinoArray.weight ? compWeight : ""}
    ${dinoArray.fact}</p>
    </div> `;     
   
};     
    /*    let tile = document.createElement('div');
        tile.className = 'grid-item';

        let tileImg = document.createElement('img');
        tileImg.innerHTML = `<img src="./images/${dinoArray.species}.png" id="img"> `

        let tileFact = document.createElement('p');
        tileFact.innerHTML = dinoArray.fact;
        tile.appendChild(tileFact);

        let tileName = document.createElement('h3');
        tileName.innerHTML = `<h3>${dinoArray.species}</h3>`;
        tile.appendChild(tileName); 
        let randomFact = getRandomFact();
        if (randomFact === 'compareHeight') {
            tileFact.innerHTML = dinoArray.compareHeight();
        } else if (randomFact === 'compareWeight') {
            tileFact.innerHTML = dinoArray.compareWeight();
        } else if (randomFact === 'compareDiet') {
            tileFact.innerHTML = dinoArray.compareDiet();
        } else {
            tileFact.innerHTML = dinoArray[randomFact];
        }
        ${dinoArray.diet ? compDiet : ""} 
        ${dinoArray.height ? compHeight : ""}
        ${dinoArray.weight ? compWeight : ""}
    */  
    
   


let form = document.getElementById('dino-compare')


function showGrid() {
    const button = document.getElementById('btn');
    button.addEventListener('click', (event) => {
        humanData = getHumanData();
        console.log("btn pressed")
        //form.innerHTML = ""
        console.log(dinoArray);
    /*    humanForm = dinoArray.map(dino => {
            if (dino.species) {
                dino.compareHeight(human.height);
                dino.compareWeight(human.weight);
                dino.compareDiet(human.diet);
                //dinoArray.fact(Math.floor(Math.random() * dinoArray.fact.length))
            }
        }); */
        tiles();    
        document.getElementById("dino-compare").style.display = "none";
        console.log("after tile");
        console.log(humanForm);
        event.preventDefault();
    });
};

showGrid();

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => {
    console.log("reset")
    document.getElementById("dino-compare").style.display = "block";
    //const form = document.getElementById("dino-compare");
    //;
})