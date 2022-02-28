function hideContainer(element){
    element.classList.remove('show-container')
    element.classList.add('hide-container')
}
function showContainer(element){
    element.classList.remove('hide-container')
    element.classList.add('show-container')
}
function toggleContainer(container1,container2,button){
    hideContainer(container1)
    showContainer(container2)
    changeColorButton(button)
}

function changeColorButton(button){
    if(button === '#button-make') {
        document.querySelector('#button-make').classList.remove('hide-button')
        document.querySelector('#button-skin').classList.add('hide-button')
    } else {
        document.querySelector('#button-skin').classList.remove('hide-button')
        document.querySelector('#button-make').classList.add('hide-button')
    }
}

const make = document.querySelector('#make')
const skin = document.querySelector('#skin')

document.querySelector('#button-make')
    .addEventListener('click', () => toggleContainer(skin,make, '#button-make'))
document.querySelector('#button-skin')
    .addEventListener('click', () => toggleContainer(make,skin, '#button-skin'))
