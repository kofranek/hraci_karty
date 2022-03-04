//vytvoření elementu DOMu <img> (DOM - Document Object Model)
let img = document.createElement("img")

//přiřazení atributu src
img.src = "images/2_of_clubs.svg.png"

//nalezení identifikátoru obr
let domElement = document.querySelector('#obr')

//připojení emementu k DOMu
domElement.appendChild(img)
