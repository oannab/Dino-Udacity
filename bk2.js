document.addEventListener('DOMContentLoaded', (event) => {
    init();
});


function loadJson(callback) {
    var req = new XMLHttpRequest();
    req.overrideMimeType("app/json");
    req.open('GET', 'Dino-Udacity/dino.json', true); 
    req.onreadystatechange = function(){
        if (req.readyState == 4 && req.status ==200)
        callback(req.responseText);
    }
    console.log(req.responseText);
    req.send(null)
}       
//get the image
function init() {
    loadJson(function(response) {
        json = JSON.stringify(response)//fetch literal data from json
    })
    getDinoData = json.Dinos;
    console.log(getDinoData);
};-----------------------------------------------
var init = {
    method: 'GET',
    headers: {
        'Content-Type': 'application.json'
    },
    mode: 'cors',
    cache: 'default'
};

let myRequest = new Request("./dino.json", init);

fetch(myRequest)
.then(function(response) {
     return response.json();
    })
    .then(function(data){
        console.log(data);
    }); 
----------------------------
    function reqListener() {
        var data = JSON.parse(this.responseText);
        console.log(data);
    }
    
    function reqError(err) {
        console.log('Fetch Error', err);
    }
    
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.onerror = reqError;
    oReq.open('GET', './dino.json', true);
    oReq.send();
    -----------------------------
/* var getDinoImage = fetch(`./Dino-Udacity/images`)
.then(response => {
    return response.blob();
}).then(blob => {
let images = document.getElementById('img').src = URL.createObjectURL(blob);
dinos.push(getDinoImage.map(this.image));
grid.append(images);
}).catch(error => {
    console.log(error);
}); */
    // Create Dino Constructor
    function Dinosaur(getDinoData, getDinoImage) { //parse json data      
        // attach to constructor object the properties fetched from json
        this.species = getDinoData.species;
        this.fact = getDinoData.fact; 
        this.image = getDinoImage.image;
        this.diet = getDinoData.diet;
        this.height = getDinoData.height;
        this.weight = getDinoData.weight;
        this.where = getDinoData.where;
        this.when = getDinoData.when;

        
    };

    
    // Create Dino Objects----------------------------------
    function dinoFactory(getDinoData, getDinoImage) { //dinos from Constructor
        let dinos = new Dinosaur();
        dinos = []; //empty array to store getDinoData objs

        
        dinos.push(getDinoData.map(this.species, this.fact, this.height, this.weight, this.diet, this.where, this.when));
        dinos.push(getDinoImage.map(this.image))
        
        return dinos; 
    };

    // Create Human Object--------------------------------------
    
    //function getHumanData() { 
        let human = (function () { //get data from form
        //let humanImage = getImage('./images/human.png');
            debugger
            let inputName = document.getElementById('name').value.toLowerCase();
            let inputFeet = document.getElementById('feet').value;
            let inputInch = document.getElementById('inches').value;            
            let inputWeight = document.getElementById('weight').value;    
            let inputDiet =  document.getElementById('diet').value;

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


                
            return {
                name: humanName(),
                height: humanHeight(),
                weight: humanWeight(),
                diet: humanDiet()
                
            }
            //
            
        })();
        console.log(human);
        
    //};
    
       
    ///CREATE GRID -------------------
    // Tile Module Starts---------------------------------------

    function drawTile(dinos, human) {
        var grid = document.getElementById('grid')//.style.display.value = "inline-flex";  
        var gridTile = document.createElement('div');
        gridTile.className = 'grid-item'
        gridTile.innerHTML = `<h3>${dinos.species}</h3> <img src="./images/${dinos.species.toLowerCase()}.png" id="img"> <p>${dinos.randomDinoFact()}</p></div> `;
        //grid.appendChild(gridTile);
        

        tiles = [] //push each tile into this array
        dinos.forEach((dino, index)=> {
            if (index === 4) {
                var humanTile = document.createElement('div');
                humanTile.className = 'grid-item';
                humanTile.innerHTML = `<h3>${human.name}</h3> <img src="./images/human.png">`;
                tiles.push(humanTile);
            } else if (dino.species === 'Pigeon') {
                gridTile.innerHTML = `All birds are considered dinosaurs.`
            } else {
                return gridTile;
            }
            tiles.push(gridTile);
        });
        grid.appendChild(tiles);
           // gridImg.src = dino.image; //get the images for dinos
           // grid.appendChild(gridImg);

        function randomDinoFact(dinos) { //shuffle dinos facts
            let fact = dinos.fact; //get the fact
            for (let i = fact.length-1; i > 0; i++) {
                let j = Math.floor(Math.random() * (i + 1));
                var shf = fact[i];
                fact[i] = fact[j]; //re-arrange the content
                fact[j] = shf;
            }
            return fact;    
        }
        function tiles(dinoArray, human) {
            const compDiet = dinoArray.compareDiet(human);
            console.log("works")
            const compHeight = dinoArray.compareHeight(human);
            const compWeight = dinoArray.compareWeight(human);
            const compFact = randomDinoFact(dinoArray);
            console.log(dinoArray, human);
        
        
            const grid = document.getElementById('grid')
            const tileFact = document.createElement('p')
        
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
        
           
            const tile = document.createElement('div');
            tile.className = 'grid-item';
            tile.innerHTML = `<h3>${dinoArray.species}</h3> 
            <img src="./images/${dinoArray.species}.png" id="img"> 
            <p>${dinoArray.diet ? compDiet : ""} 
            ${dinoArray.height ? compHeight : ""}
            ${dinoArray.weight ? compWeight : ""}
            ${dinoArray.fact ? compFact : ""}</p>
            </div> `;
            // conditional if statement
            //dinoTiles = [] //push each tile into this array
            dinoArray.forEach((dinoArray, human, index)=> {
                if (tile === 4) {
                    tile.innerHTML = `<h3>${human.name}</h3> <img src="./images/human.png">`;
                } else if (dinoArray.species === 'Pigeon') {
                    tile.innerHTML = `All birds are considered dinosaurs.`
                } else {
                    return tile;
                }
            });   
            return tile;
        };  
// Tile Module Ends -------------------------
// set 3 methods under one big f()
    Dinosaur.prototype.compareDino = function(human) {
        if (this.diet === human.humanDiet()) {
            return `Seems you and dinos ${this.diet} diet have similar tastes `
        } else {
            return `Thid dino is ${this.diet} whilst you prefer a ${human.humanDiet()}`
        }
    }
        

            Dinosaur.prototype.compareHeight = function(human) {
                //let dinoHeight = Number(dinos.height);
                if (this.height === human.humanHeight()) {
                    return `Tall as any dino around`;
                } else (this.height > human.humanHeight()); {
                    return `The dinosaur is ${this.height / human.humanHeight()} x more taller than you!`;
                } 
                
            }   
        
        
        Dinosaur.prototype.compareWeight = function(human) { 
                //let dinoWeight = Number(dinos.weight);
                if (this.weight === human.humanWeight()) {
                    return `I'm pretty sure you've entered the weight wrong`;
                } else if (this.weight > human.humanWeight()) {
                    return `The dinosaur is ${this.weight / humanData.humanWeight()} x more heavier than you!`;
                } else {
                    return `Probably an input mistake.`
                }
            }
        };

        

        //return compareDino;
         

 //----End of Prototype Methods Module------------------------

    // Remove form from screen
    //document.querySelector(`${methodOne}`).style.display = 'block';

    
    function clicked(event) {
        console.log("draw me, pretty please, please work")
        event.preventDefault;
        grid.style.display = "flex";
        let button = document.querySelector('btn').addEventListener("click", event => {
            button.onclick = () => {
            human;
           
            drawTile(dinos, human);
            }
        }
    };

    clicked();
    
        