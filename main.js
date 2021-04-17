let cube = {
    id: "cube",
    x: 300,
    y: 300,
    width: 56,
    height: 56,
    transition: .25,
    step: 56,
    color: "black",
    
}

let map = {
    width: window.innerWidth,
    height: window.innerHeight,
    x: 0,
    y: 0,
    color: "#f5f5f5",
    border: "#f1f1f1"
}

let bots = [];

let bot = {
    id: 1,
    x: 100,
    y: 100,
    width: 56,
    height: 56,
    transition: .25,
    step: 56,
    color: "yellow",
    
}

bots.push(bot); 

let buffs = [];

let buff = {
    id: 1,
    x: 300,
    y: 300,
    width: 56,
    height: 56,
    transition: .25,
    step: 56,
    color: "purple",
    
}

buffs.push(buff);

renderCube((spawnCube(map, cube)), cube); 
renderMap(map);
renderBots(bots);
renderBuffs(buffs); 

let tike = setInterval(timeTike, 1000);

console.log(window); 