const colorPicker = document.getElementById('color-picker')
const colorMode = document.getElementById('color-mode')
const getSchemeBtn = document.getElementById('get-btn')
let colorsContainer = document.getElementById('colors-container')
let hexValues = []




function getSeedColor() {
    const seedColor = colorPicker.value.slice(1)
    return seedColor
}

function getColorMode() {
    let selectValue = colorMode.value
    return selectValue
}

function renderColors() {

    let html = ''
    hexValues.forEach(value => {
        html += `<div class="color-container">
                    <div class="color" style="background-color: #${value}" ></div>
                    <p class="color-text">#${value}</p>
                </div>
                `
    });

    colorsContainer.innerHTML = html
    hexValues = []
}



getSchemeBtn.addEventListener('click', function(){
    let hex = getSeedColor()
    let mode = getColorMode()
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
    .then(response => response.json())
    .then(data => {
        let colorsArray = data.colors
        colorsArray.forEach(color => {
            hexValues.push(color.hex.clean)
        })
        
        renderColors()
    })
})


