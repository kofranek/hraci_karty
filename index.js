let adresaObr = 'images/2_of_hearts.svg.png'

function zobrazObrazek (adr) {
  //vytvoření elementu DOMu <img> (DOM - Document Object Model)
  let img = document.createElement('img')
  //přiřazení atributu src
  img.src = adr
  //nalezení identifikátoru obr
  let domElement = document.querySelector('#obr')
  //připojení emementu k DOMu
  domElement.appendChild(img)
}

function zobrazKartu (karta) {
  if (karta.rub) {
    zobrazObrazek(karta.rubSrc)
  } else {
    zobrazObrazek(karta.src)
  }
}

function otocKartu (karta) {
  karta.rub = !karta.rub
}

//clubs (kříže):
const c2 = {
  src: 'images/2_of_clubs.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}
const c3 = {
  src: 'images/3_of_clubs.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 3,
  rub: false
}
const c4 = {
  src: 'images/4_of_clubs.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 4,
  rub: false
}
const c5 = {
  src: 'images/5_of_clubs.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 5,
  rub: false
}
const c6 = {
  src: 'images/6_of_clubs.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 6,
  rub: false
}
const c7 = {
  src: 'images/7_of_clubs.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 7,
  rub: false
}
const c8 = {
  src: 'images/8_of_clubs.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 8,
  rub: false
}
const c9 = {
  src: 'images/9_of_clubs.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 9,
  rub: false
}
const c10 = {
  src: 'images/10_of_clubs.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const cj = {
  src: 'images/Jack_of_clubs2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const cq = {
  src: 'images/Queen_of_clubs2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}
const ck = {
  src: 'images/King_of_clubs2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}
const ca = {
  src: 'images/Ace_of_clubs.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}
//hearts (srdce):
const h2 = {
  src: 'images/2_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}
const h3 = {
  src: 'images/3_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 3,
  rub: false
}
const h4 = {
  src: 'images/4_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 4,
  rub: false
}
const h5 = {
  src: 'images/5_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 5,
  rub: false
}
const h6 = {
  src: 'images/6_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 6,
  rub: false
}
const h7 = {
  src: 'images/7_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 7,
  rub: false
}
const h8 = {
  src: 'images/8_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 8,
  rub: false
}
const h9 = {
  src: 'images/9_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 9,
  rub: false
}
const h10 = {
  src: 'images/10_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const hj = {
  src: 'images/Jack_of_hearts2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const hq = {
  src: 'images/Queen_of_hearts2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}
const hk = {
  src: 'images/King_of_hearts2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}
const ha = {
  src: 'images/Ace_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}

//diamonds (kára):
const d2 = {
  src: 'images/2_of_diamonds.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}
const d3 = {
  src: 'images/3_of_diamonds.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 3,
  rub: false
}
const d4 = {
  src: 'images/4_of_diamonds.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 4,
  rub: false
}
const d5 = {
  src: 'images/5_of_diamonds.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 5,
  rub: false
}
const d6 = {
  src: 'images/6_of_diamonds.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 6,
  rub: false
}
const d7 = {
  src: 'images/7_of_diamonds.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 7,
  rub: false
}
const d8 = {
  src: 'images/8_of_diamonds.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 8,
  rub: false
}
const d9 = {
  src: 'images/9_of_diamonds.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 9,
  rub: false
}
const d10 = {
  src: 'images/10_of_diamonds.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const dj = {
  src: 'images/Jack_of_diamonds2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const dq = {
  src: 'images/Queen_of_diamonds2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}
const dk = {
  src: 'images/King_of_diamonds2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}
const da = {
  src: 'images/Ace_of_diamonds.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}
//spades (piky):
const s2 = {
  src: 'images/2_of_spades.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}
const s3 = {
  src: 'images/3_of_spades.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 3,
  rub: false
}
const s4 = {
  src: 'images/4_of_spades.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 4,
  rub: false
}
const s5 = {
  src: 'images/5_of_spades.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 5,
  rub: false
}
const s6 = {
  src: 'images/6_of_spades.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 6,
  rub: false
}
const s7 = {
  src: 'images/7_of_spades.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 7,
  rub: false
}
const s8 = {
  src: 'images/8_of_spades.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 8,
  rub: false
}
const s9 = {
  src: 'images/9_of_spades.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 9,
  rub: false
}
const s10 = {
  src: 'images/10_of_spades.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const sj = {
  src: 'images/Jack_of_spades2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const sq = {
  src: 'images/Queen_of_spades2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}
const sk = {
  src: 'images/King_of_spades2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}
const sa = {
  src: 'images/Ace_of_spades2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}

const clubs = [c2, c3, c4, c5, c6, c7, c8, c9, c10, cj, cq, ck, ca]
const hearts = [h2, h3, h4, h5, h6, h7, h8, h9, h10, hj, hq, hk, ha]
const diamonds = [d2, d3, d4, d5, d6, d7, d8, d9, d10, dj, dq, dk, da]
const spades = [s2, s3, s4, s5, s6, s7, s8, s9, s10, sj, sq, sk, sa]

//nutno vytvořit:
/*
const hearts = [h2,h3,h4,h5,h6,h7,h8,h9,h10,hj,hq,hk,ha]
const diamonds = [d2,d3,d4,d5,d6,d7,d8,d9,d10,dj,dq,dk,da]
const spades = [s2,s3,s4,s5,s6,s7,s8,s9,s10,sj,sq,sk,sa]
*/

for (const card of clubs) {
    zobrazKartu(card)    
}
for (const card of hearts) {
    zobrazKartu(card)    
}
for (const card of diamonds) {
    zobrazKartu(card)    
}
for (const card of spades) {
    zobrazKartu(card)    
}
