function createColor() {
    var hexcodes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    var hex = ['#'];
    for (let i=0; i<6; i++) {
        var num = Math.floor(Math.random() * 11);
        hex += hexcodes[num];
    }
    let hexcode = hex.toString();
    return hexcode;
}

function randomiseColors() {
    let codes = [];
    let firstColor = document.getElementById('colorOne');
    let secondColor = document.getElementById('colorTwo');
    let thirdColor = document.getElementById('colorThree');
    let fourthColor = document.getElementById('colorFour');
    let fifthColor = document.getElementById('colorFive');
    let colors = [firstColor, secondColor, thirdColor, fourthColor, fifthColor];

    for (let i=0; i<5; i++) {
        let hexcode = createColor();
        codes.push(hexcode);
        document.getElementById(`${colors[i].id}`).style.backgroundColor = codes[i];
        document.getElementById(`${colors[i].id}Head`).textContent = `${codes[i]}`;
    }
    
}