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
    // Generate a random base color
    let baseHex = createColor();

    // Generate the complementary color for the base color
    let complementaryHex = getComplementaryColor(baseHex);

    // Generate variations of the base and complementary colors
    let baseVariations = [];
    let complementaryVariations = [];

    for (let i = 0; i < 2; i++) {
        baseVariations.push(getVariationColor(baseHex));
        complementaryVariations.push(getVariationColor(complementaryHex));
    }

    // Shuffle the base and complementary variations
    shuffleArray(baseVariations);
    shuffleArray(complementaryVariations);

    // Accessing the colorDivs by class name
    let colorDivs = document.querySelectorAll('.palette-color');

    // Combine the base and complementary colors with their variations
    let colors = [baseHex, complementaryHex, ...baseVariations, ...complementaryVariations];

    // Applying hex values (background and head) to divs
    for (let i = 0; i < colorDivs.length; i++) {
        let colorDiv = colorDivs[i];
        let colorHead = colorDiv.querySelector('.palette-color-head');

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