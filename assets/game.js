class Hero{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.node = document.createElement("div");
        this.node.innerHTML = " ";
        this.node.className = "hero";
    }

    getNode(){
        console.log(this.node);
        return this.node;
    }
}

class Town{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.node = document.createElement("div");
        this.node.innerHTML = "";
        this.node.className = "town";
    }

    getNode(){
        console.log(this.node);
        return this.node;
    }
}



class Map {

    constructor() {
        this.mapa = document.getElementById("map");
        this.listObj = [];
    }

    setTeren(teren) {
        this.teren = teren;
    }

    setObj(obj){
        this.listObj.push(obj);
    }

    
    drawObj(x, y){

       let add = "";

        this.listObj.forEach(element => {
            if(element.x == x && element.y == y){
                //add.appendChild(element.getNode);
               add += element.getNode().outerHTML;
            } 
        });

        return add;
    }

    getTitle(terenId, x, y){

     let type = "brown";

        switch(terenId) {
            case 1:
              type = "green";
            break;

            case 2:
              type = "blue";
            break;
          } 

        let title = document.createElement("div");
        title.innerHTML = this.drawObj(x, y);
        title.className = "title";
        title.className += " " + type;
      
        this.mapa.appendChild(title);
    }

    draw() {
        for (let y = 0; y < this.teren.length; y++) {
            for (let x = 0; x < this.teren[y].length; x++) {
                 this.getTitle(this.teren[y][x], x, y);
            }

            this.mapa.innerHTML += '<br>';
        }
    }
}


class Game {

    constructor() {
        this.map = new Map();
    }


    start(teren) {

        // let h = ;
        // let h = new Hero(5,3);
 
        this.map.setTeren(teren);
        this.map.setObj(new Hero(0,3));
        this.map.setObj(new Town(5,3));
        this.map.setObj(new Town(8,6));
        this.map.draw();
    }


};


let map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let game = new Game();

game.start(map);
