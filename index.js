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
    // generate random base color
    let baseHex = createColor();
    // generate complementary color on other side of color wheel 
    let complementaryHex = getComplementaryColor(baseHex);

    // let codes = [baseHex, complementaryHex];

    // generate variations of base and complementary colours
    let baseVariations = [];
    let complementaryVariations = [];

    for (let i=0; i<5; i++) {
        baseVariations.push(getVariationColor(baseHex));
        complementaryVariations.push(getVariationColor(complementaryHex));
    }

    // accessing ids directly below
    let colorDivs = ['colorOne', 'colorTwo', 'colorThree', 'colorFour', 'colorFive'];
    let colors = [baseHex, complementaryHex, ...baseVariations, ...complementaryVariations];

    shuffleArray(colors);

    // applying hex values (background and head) to divs
    for (let i=0; i<colorDivs.length; i++) {
        let colorDiv = document.getElementById(colorDivs[i]);
        let colorHead = document.getElementById(`${colorDivs[i]}Head`);

        colorDiv.style.backgroundColor = colors[i];
        colorHead.textContent = colors[i];
    }
    
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function getComplementaryColor(hex) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    let complementaryR = 255 - r;
    let complementaryG = 255 - g;
    let complementaryB = 255 - b;
    return `#${complementaryR.toString(16).padStart(2,'0')}${complementaryG.toString(16).padStart(2,'0')}${complementaryB.toString(16).padStart(2,'0')}`

}

function getVariationColor(hex) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`

}

function changeColor(colorId) {
    let hexcode = createColor();
    let colorDiv = document.getElementById(colorId);
    let colorHead = document.getElementById(`${colorId}Head`);

    colorDiv.style.backgroundColor = hexcode;
    colorHead.textContent = hexcode;
}