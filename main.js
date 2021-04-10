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
    width: 370,
    height: 370,
    x: 70,
    y: 70,
    color: "#f5f5f5",
    border: "#f1f1f1"
}

renderCube((spawnCube(map, cube)), cube); 
renderMap(map); 