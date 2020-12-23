const { functionExpression } = require("@babel/types");

    // Create Dino Constructor
    function Dinosaur(species, fact, image, diet, height, weight, where, when) { //parse json data      
        //get the json data
        
            fetch('./dino.json')
                .then(function(resp){
                    return resp.json();
                })
                .then(function(data){
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
        
                });
            
        function loadJson(callback) {
            var req = new XMLHttpRequest();
            req.overrideMimeType("app/json");
            req.open('GET', 'js/dino.json', true);
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
        };

        var getDinoImage = fetch(`./images`)
        .then(response => {
            return response.blob();
        }).then(blob => {
        let images = document.getElementById('img').src = URL.createObjectURL(blob);
        dinos.push(getDinoImage.map(this.image));
        grid.append(images);
        }).catch(error => {
            console.log(error);
        });

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

        
        dinos.push(getDinoData.map(this.species, this.fact, this.height, this.weight, this.diet));
        dinos.push(getDinoImage.map(this.image))
        
        return dinos; 
    };

    // Create Human Object--------------------------------------
    
    //function getHumanData() { 
        let human = (function () { //get data from form
        //let humanImage = getImage('./images/human.png');
            debugger
            let inputName = document.getElementById('name').value.toLowerCase();
            let inputHeight = document.getElementById('feet').value + document.getElementById('inches').value;            let inputWeight = document.getElementById('#weight').value;    
            let inputDiet =  document.getElementById('diet').value;

            function humanName (){
                return inputName;
            }   
            function humanHeight () {
                return inputHeight;
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
        return human;
    //};
    
       
    ///CREATE GRID -------------------
    // Tile Module Starts---------------------------------------
   /* function Tile (dinos) {
        this.name = dinos.name;
        this.fact = dinos.fact;
        this.image = dinos.image;
        
    }; */
            
    function drawTile(dinos, human) {
        var grid = document.getElementById('grid')//.style.display.value = "inline-flex";  
        
        //grid.appendChild(gridTile);

        tiles = [] //push each tile into this array
        dinos.forEach((dino, index)=> {
            if (index === 4) {
                var humanTile = document.createElement('div');
                humanTile.className = 'grid-item';
                humanTile.innerHTML = `<div class="grid-item> <h3>${human.name}</h3> <img src="./images/human.png>`;
                tiles.push(humanTile);
            } else if (dino.species === 'Pigeon') {
                
                return `All birds are considered dinosaurs.`
            } else {
                return gridTile;
            }
            tiles.push(tile);
        });

        tiles.forEach(index => { //get the 
            let gridTile = document.createElement('div');
            gridTile.className = 'grid-item'
            gridTile.innerHTML = `<div class="grid-item> <h3>${dino.species}</h3> <img src="./images/${this.species.toLowerCase()}.png" id="img"> <p>${this.randomDinoFact()}</p></div> `;
           // gridImg.src = dino.image; //get the images for dinos
           // grid.appendChild(gridImg);
            grid.appendChild(gridTile);
        });
            
        function randomDinoFact() { //shuffle dinos facts
            let fact = dino.fact; //get the fact
            for (let i = fact.length-1; i > 0; i++) {
                let j = Math.floor(Math.random() * (i + 1));
                var shf = fact[i];
                fact[i] = fact[j]; //re-arrange the content
                fact[j] = shf;
            }
            return fact;    
        }

        return drawTile(), randomDinoFact();        
    };     
    
// Tile Module Ends -------------------------
// set 3 methods under one big f()
    Dinosaur.prototype = compareDino;
        var compareDino = {
            compareDiet : function(dinos, human) { 
                //linking new dino obj from constructor to these methods
            
                let dinoDiet = dinos.diet;
                if (dinoDiet === human.humanDiet()) {
                    return `Seems you and dinos ${dinoDiet} diet have similar tastes `
                } else {
                    return `Thid dino is ${dinoDiet} whilst you prefer a ${human.humanDiet()}`
                }
            },
        

            compareHeight : function(dinos, human) {
                let dinoHeight = Number(dinos.height);
                if (dinoHeight === human.humanHeight()) {
                    return `Tall as any dino around`;
                } else (dinoHeight > human.humanHeight()) {
                    return `The dinosaur is ${dinoHeight / human.humanHeight()} x more taller than you!`;
                } 
                
            },   
        
        
            compareWeight : function (dinos, human) { 
                let dinoWeight = Number(dinos.weight);
                if (dinoWeight === human.humanWeight()) {
                    return `I'm pretty sure you've entered the weight wrong`;
                } else if (dinoWeight > human.humanWeight()) {
                    return `The dinosaur is ${dinoWeight / humanData.humanWeight()} x more heavier than you!`;
                } else {
                    return `Probably an input mistake.`
                }
            },

            return : 
                compareWeight(), 
                compareHeight(), 
                compareDiet();
            };

        };

        //return compareDino;
         

 //----End of Prototype Methods Module------------------------

    // Remove form from screen
    //document.querySelector(`${methodOne}`).style.display = 'block';

    
    document.addEventListener('DOMContentLoaded', () => {
        
        
        let button = document.querySelector('btn').addEventListener("click", (event) => {
            button.onclick = () => 
                console.log("draw me, pretty please, please work")
                drawTile(dinos, human);
            }
            event.preventDefault;
        });
        
    });
        
        //prevent page from refreshing once form's 'compare me' btn is clicked
        
        //up in get data from form on human
  




    // On button click, prepare and display info
    document.querySelector("#btn").onclick = () => {
        
    };
