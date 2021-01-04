
    
    // Create Dino Constructor
    function Dinosaur(species, fact, images, diet, height, weight, where, when) { //parse json data
        
        let dinos = [] //empty array to store dinoFactory objs
        //fetch literal data from json
            fetch('dino.json')
                .then(function (response) {
                    return response.json();
                }).then(function(obj) {
                    console.log(obj);
                })   
                .catch(function (error) {
                    dinos = {};
                    console.log(error);
                });

                fetch('./dino.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            }).catch(function (error) {
                console.log(error);
        });

        
            fetch(`./images`)
                .then(response => {
                    return response.blob();
                }).then(blob => {
                let images = document.getElementById('img').src = URL.createObjectURL(blob);
                grid.append(images)
                }).catch(error => {
                    console.log(error);
                });
            

        // attach to constructor object the properties fetched from json
            this.species = species;
            this.fact = fact; 
            this.image = images; //attach src img
            this.diet = diet;
            this.height = height;
            this.weight = weight;
            this.where = where;
            this.when = when;
        
            return getDinoData();
            return dinos
    };

    // Create Dino Objects----------------------------------
    function dinoFactory(dinos) { //dinos from Constructor
        //dinos.image = image(get(`./images/${data.species.toLowerCase()}`));
        dinoObj = [] //the new objects created from constructor
        dinos.map((dino) => {
            dinoObj = new Dinosaur(
       
            dinos.species;
            dinos.fact;
            dinos.diet;
            dinos.height;
            dinos.weight;
            dinos.where;
            dinos.when;
        });
        const dinoObj = new Dinosaur();   
    for(dino in dinos) {
        dinoArray.push(dinos.map(
            dinos.species, 
            dinos.fact,
            dinos.diet,
            dinos.height,
            dinos.weight,
            dinos.where,
            dinos.when))
    };
            dinoObj.push(dinos);
            dinos.map(getDinoData => {      
                dino.species;
                dino.fact;
                dino.diet;
                dino.height;
                dino.weight;
                dino.where;
                dino.when;
            });
            return dinos
    };

    // Create Human Object--------------------------------------

    function Human(name, height, weight, diet) { //creating Constructor which stands as template for human Obj
        this.name;
        this.height;
        this.weight;
        this.diet;
        this.image = getImage(`./images/human.png`);
    };

    let humanData = (function () { //get data from form
        function getHumanData() {
            let inputName = document.getElementById('#name').toLowerCase().value;
            let inputHeight = document.getElementById('#feet').value + document.getElementById('#inches').value;
            let inputWeight = document.getElementById('#weight').value;    
            let inputDiet =  document.getElementById('diet').value;
            //let result = document.createElement('result');    
            

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
                name: humanName,
                height: humanHeight,
                weight: humanWeight,
                diet: humanDiet
            }
        }
        return    
    })();

    
       
    ///CREATE GRID -------------------
    // Tile Module Starts---------------------------------------
    let generateTile = (function(x, y) {
        debugger  //Tile object blank Constructor
        
        this.x = x;
        this.y = y;
        this.size = 50;
        
        let tile = document.createElement('div');
        let tiles = []; //array to push/store all tiles
        var col = 3;
        var row = 3;

        var grid = document.getElementById('#grid'); //attach grid to html id
            tiles.forEach(tile => {
                let gridTile = document.querySelector('.grid-item'); //select class form css
                grid.appendChild(gridTile);
            })

        function draw () {
            fill(244, 244, 244);
            //image(getImage("./images")); //needs name linked to dino species
            strokeWeight(2);
            rect(this.x, this.y, this.size, this.size);
            getImage(`./images/${data.species.toLowerCase()}`)
        }
// multiple instances of tiles
//then associate both image & location.randomized with them 
        function drawEmptyTile (col, row) {
            debugger
            for (var i = 0; i < col; i++) {
                col = document.createElement('div');
                grid.appendChild(col).className = "gridCol";
                for (var j = 0; j < row; j++) {
                    row = document.createElement('div');
                    row[j].appendChild(row).className = "gridRow"
                    let tileX = i * 50 + 50 ;//i * padding + distance from window padding
                    let tileY = j * 50 + 50;
                    tiles.push(tileX, tileY);
                }    
                
                tiles[i].draw();
                grid.append(tiles)
                
            }
            //var2:
            for (let i = 0; i < col.length; i++) {
                col = grid.insertCol(i);
                for (let j = 0; j < row.length; j++) {
                    row = col.insertRow(j);
                    x * i;
                    y * j;
                    grid[i][j];
                    strokeWeight(2);
                    fill(255);
                    if (tile)
    
                }
                tiles.push(tile); 
                tile.show();
            } 

            
            for (var i = 0; i < tiles.length; i++) {
                tiles[i].draw();
            }
            
        };          
        let randTile = function imagePath () {
            
            function randomize (img) {
                for (var i = 0; i <= 9; i++) {
                    
                }
            }

    })();
// Tile Module Ends -------------------------
     // Add tiles to DOM 
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
    //randomize img/data in tiles:-----------------
    dinoFactory.random = (function () {
       
        let dinosProps = []; //store objects as arrays first
        function getRandom() {
            return arr[Math.floor(Math.random() * arr.length)]
        }

    })();

/// maybe add method to prototype???
    let compare = function (){ //methods
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
        let dinoDiet = dino.diet;
        let dinoWeight = Number(dino.weight);
        let dinoHeight = Number(dino.height);
        
        function compareDiet () {
            if (dinoDiet === humanData.humanDiet()) {
                return `Seems you and dinos ${dinoDiet} diet have similar tastes `;
            } else {
                return `Thid dino is ${dinoDiet} whilst you prefer a ${humanData.humanDiet()}`;
            }
        }

        function compareHeight() {
            if (dinoHeight === humanData.humanHeight()) {
                return `Nice`;
            } else if (dinoHeight > humanData.humanHeight()) {
                return `The dinosaur is ${dinoHeight / humanData.humanHeight()} x more taller than you!`;
                }
            }
        }

        function compareWeight() {
            if (dinoWeight === humanData.humanWeight()) {
                return `I'm pretty sure you've entered the weight wrong`;
            } else if (dinoWeight === humanData.humanWeight()) {
                return `The dinosaur is ${dinoWeight / humanData.humanWeight()} x more heavier than you!`;
            } else {

            }
        } 
       
    }; 
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.

 //----End of Prototype Methods Module------------------------





    // Generate Tiles for each Dino in Array
    


    
    


   

    // Remove form from screen
    //document.querySelector(`${methodOne}`).style.display = 'block';

    let formEvent = 'DOMContentLoaded';
    document.addEventListener(formEvent, () => {
        let button = document.querySelector('#btn').disabled = true;
        let formInput = document.querySelectorAll('input').value; //input text to variable
        formInput.onkeyup = () => {
            if (formInput.value.length > 0) { //if fields are not filled, diable submit option
                button.disabled = false;
            } else {
                button.disabled = true;
            }    
        };
        let form = document.querySelector('form').onsubmit = () => {
            formInput.value;
        }

        });
        
        //prevent page from refreshing once form's 'compare me' btn is clicked
        return false;
        //up in get data from form on human
    });




    // On button click, prepare and display info
    document.querySelector("#btn").onclick = () => {
        dinoArray.map(each =>{
            if(dinoArray.species) {
                dinoArray.compareDiet(human.diet);
                console.log("works")
                dinoArray.compareHeight(human.height);
                dinoArray.compareWeight(human.weight);
            }
    };
