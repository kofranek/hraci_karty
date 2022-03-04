
let adresaObr="images/2_of_hearts.svg.png"


function zobrazObrazek(adr) {
    //vytvoření elementu DOMu <img> (DOM - Document Object Model)
    let img = document.createElement("img")
    //přiřazení atributu src
    img.src = adr
    //nalezení identifikátoru obr
    let domElement = document.querySelector('#obr')
    //připojení emementu k DOMu
    domElement.appendChild(img)

}

function zobrazKartu(karta){
   if (karta.rub) {
       zobrazObrazek(karta.rubSrc)
   } else {
       zobrazObrazek(karta.src)
   }

}


function otocKartu(karta) {
    karta.rub = !karta.rub
}

const c2={
    src:'images/2_of_clubs.svg.png',
    rubSrc: 'images/reverse.png',
    hodnota: 2,
    rub: false,
}
const c3={
    src:'images/3_of_clubs.svg.png',
    rubSrc: 'images/reverse.png',
    hodnota: 3,
    rub: false,
}
const c4={
    src:'images/4_of_clubs.svg.png',
    rubSrc: 'images/reverse.png',
    hodnota: 4,
    rub: false,
}
const c5={
    src:'images/5_of_clubs.svg.png',
    rubSrc: 'images/reverse.png',
    hodnota: 5,
    rub: false,
}
const c6={
    src:'images/6_of_clubs.svg.png',
    rubSrc: 'images/reverse.png',
    hodnota: 6,
    rub: false,
}
const c7={
    src:'images/7_of_clubs.svg.png',
    rubSrc: 'images/reverse.png',
    hodnota: 7,
    rub: false,
}
const c8={
    src:'images/8_of_clubs.svg.png',
    rubSrc: 'images/reverse.png',
    hodnota: 8,
    rub: false,
}
const c9={
    src:'images/9_of_clubs.svg.png',
    rubSrc: 'images/reverse.png',
    hodnota: 9,
    rub: false,
}
const c10={
    src:'images/10_of_clubs.svg.png',
    rubSrc: 'images/reverse.png',
    hodnota: 10,
    rub: false,
}
const cj={
    src:'images/Jack_of_clubs2.svg.png',
    rubSrc: 'images/reverse.png',
    hodnota: 10,
    rub: false,
}
const cq={
    src:'images/Queen_of_clubs2.svg.png',
    rubSrc: 'images/reverse.png',
    hodnota: 2,
    rub: false,
}
const ck={
    src:'images/King_of_clubs2.svg.png',
    rubSrc: 'images/reverse.png',
    hodnota: 2,
    rub: false,
}
const ca={
    src:'images/Ace_of_clubs.svg.png',
    rubSrc: 'images/reverse.png',
    hodnota: 2,
    rub: false,
}


const clubs = [c2,c3,c4,c5,c6,c7,c8,c9,c10,cj,cq,ck,ca]

//nutno vytvořit:
/*
const hearts = [h2,h3,h4,h5,h6,h7,h8,h9,h10,hj,hq,hk,ha]
const diamonds = [d2,d3,d4,d5,d6,d7,d8,d9,d10,dj,dq,dk,da]
const spades = [s2,s3,s4,s5,s6,s7,s8,s9,s10,sj,sq,sk,sa]
*/

zobrazKartu(clubs[12])  //zobrazí křížové eso (ca)

