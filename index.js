let adresaObr = 'images/Ace_of_hearts.svg.png'

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

//zobrazObrazek(adresaObr)


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
  name:'c2',
  src: 'images/2_of_clubs.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}

/*
zobrazKartu(c2)
otocKartu(c2)
zobrazKartu(c2)
otocKartu(c2)
zobrazKartu(c2)
*/

const c3 = {
  name: 'c3',
  src: 'images/3_of_clubs.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 3,
  rub: false
}
const c4 = {
  name: 'c4',
  src: 'images/4_of_clubs.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 4,
  rub: false
}
const c5 = {
  name: 'c5',
  src: 'images/5_of_clubs.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 5,
  rub: false
}
const c6 = {
  name: 'c6',
  src: 'images/6_of_clubs.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 6,
  rub: false
}
const c7 = {
  name: 'c7',
  src: 'images/7_of_clubs.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 7,
  rub: false
}
const c8 = {
  name: 'c8',  
  src: 'images/8_of_clubs.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 8,
  rub: false
}
const c9 = {
  name: 'c9',
  src: 'images/9_of_clubs.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 9,
  rub: false
}
const c10 = {
  name: 'c10',
  src: 'images/10_of_clubs.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const cj = {
  name: 'cj',
  src: 'images/Jack_of_clubs2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const cq = {
  name: 'cq',
  src: 'images/Queen_of_clubs2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const ck = {
  name: 'ck',
  src: 'images/King_of_clubs2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const ca = {
  name: 'ca',
  src: 'images/Ace_of_clubs.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}
//hearts (srdce):
const h2 = {
  name: 'h2',
  src: 'images/2_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}
const h3 = {
  name: 'h3',
  src: 'images/3_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 3,
  rub: false
}
const h4 = {
  name: 'h4',
  src: 'images/4_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 4,
  rub: false
}
const h5 = {
  name: 'h5',
  src: 'images/5_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 5,
  rub: false
}
const h6 = {
  name: 'h6',
  src: 'images/6_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 6,
  rub: false
}
const h7 = {
  name: 'h7',
  src: 'images/7_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 7,
  rub: false
}
const h8 = {
  name: 'h8',
  src: 'images/8_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 8,
  rub: false
}
const h9 = {
  name: 'h9',
  src: 'images/9_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 9,
  rub: false
}
const h10 = {
  name: 'h10',
  src: 'images/10_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const hj = {
  name: 'h11',
  src: 'images/Jack_of_hearts2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const hq = {
  name: 'h12',
  src: 'images/Queen_of_hearts2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const hk = {
  name: 'hk',
  src: 'images/King_of_hearts2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const ha = {
  name: 'ha',
  src: 'images/Ace_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}

//diamonds (kára):
const d2 = {
  name: 'd2',
  src: 'images/2_of_diamonds.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}
const d3 = {
  name: 'd3',
  src: 'images/3_of_diamonds.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 3,
  rub: false
}
const d4 = {
  name: 'd4',
  src: 'images/4_of_diamonds.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 4,
  rub: false
}
const d5 = {
  name: 'd5',
  src: 'images/5_of_diamonds.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 5,
  rub: false
}
const d6 = {
  name: 'd6',
  src: 'images/6_of_diamonds.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 6,
  rub: false
}
const d7 = {
  name: 'd7',
  src: 'images/7_of_diamonds.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 7,
  rub: false
}
const d8 = {
  name: 'd8',
  src: 'images/8_of_diamonds.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 8,
  rub: false
}
const d9 = {
  name: 'd9',
  src: 'images/9_of_diamonds.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 9,
  rub: false
}
const d10 = {
  name: 'd10',
  src: 'images/10_of_diamonds.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const dj = {
  name: 'dj',
  src: 'images/Jack_of_diamonds2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const dq = {
  name: 'dq',
  src: 'images/Queen_of_diamonds2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const dk = {
  name: 'dk',
  src: 'images/King_of_diamonds2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const da = {
  name: 'da',
  src: 'images/Ace_of_diamonds.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}
//spades (piky):
const s2 = {
  name: 's2',
  src: 'images/2_of_spades.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}
const s3 = {
  name: 's3',
  src: 'images/3_of_spades.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 3,
  rub: false
}
const s4 = {
  name: 's4',
  src: 'images/4_of_spades.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 4,
  rub: false
}
const s5 = {
  name: 's5',
  src: 'images/5_of_spades.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 5,
  rub: false
}
const s6 = {
  name: 's6',
  src: 'images/6_of_spades.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 6,
  rub: false
}
const s7 = {
  name: 's7',
  src: 'images/7_of_spades.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 7,
  rub: false
}
const s8 = {
  name: 's8',
  src: 'images/8_of_spades.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 8,
  rub: false
}
const s9 = {
  name: 's9',
  src: 'images/9_of_spades.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 9,
  rub: false
}
const s10 = {
  name: 's10',
  src: 'images/10_of_spades.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const sj = {
  name: 'sj',
  src: 'images/Jack_of_spades2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const sq = {
  name: 'sq',
  src: 'images/Queen_of_spades2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const sk = {
  name: 'sk',
  src: 'images/King_of_spades2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 10,
  rub: false
}
const sa = {
  name: 'sa',
  src: 'images/Ace_of_spades2.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}

const clubs = [c2, c3, c4, c5, c6, c7, c8, c9, c10, cj, cq, ck, ca]
const hearts = [h2, h3, h4, h5, h6, h7, h8, h9, h10, hj, hq, hk, ha]
const diamonds = [d2, d3, d4, d5, d6, d7, d8, d9, d10, dj, dq, dk, da]
const spades = [s2, s3, s4, s5, s6, s7, s8, s9, s10, sj, sq, sk, sa]

//úkol1 nutno vytvořit:
/*
const hearts = [h2,h3,h4,h5,h6,h7,h8,h9,h10,hj,hq,hk,ha]
const diamonds = [d2,d3,d4,d5,d6,d7,d8,d9,d10,dj,dq,dk,da]
const spades = [s2,s3,s4,s5,s6,s7,s8,s9,s10,sj,sq,sk,sa]
*/

//zobrazKartu(diamonds[10])
//console.log('délka diamonds',diamonds.length)
//console.log('délka spades',spades.length)

const cards1=clubs.concat(hearts)

const cards2 = [ ...clubs, ...hearts]

const cardsAll =  clubs.concat(hearts).concat(diamonds).concat(spades)

const cardsAll1 = [...clubs, ...hearts, ...diamonds, ...spades]

//console.log('počet prvků v cardsAll',cardsAll.length)



//for (const card of cardsAll) {zobrazKartu(card)}

/*
ÚKOL 2

každá karta je reprezentována objektem s následujícími poli
src:String - obsahuje adresu obrázku lícové strany karty,
rubSrc:String - obsahuje adresu obrázku na rubové straně karty
hodnota:Number - obsahuje číselnou hodnotu arty v karetní hře

např konstant h2, reprezentuje srdcovou dvojku zapsanou jako objekt:

const h2 = {
  src: 'images/2_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}

vaším úkolem bude k těmto polím přidat nové pole name typu String, 
které bude obsahovat název karty:
'c2','c3'...'c10','cj, 'cq', 'ck', 'ca' pro křížové karty,
'd2','d3'...'d10','dj, 'dq', 'dk', 'da' pro kárové karty,
's2','s3'...'s10','sj, 'sq', 'sk', 'sa' pro pikové karty,
'h2','h3'...'h10','hj, 'hq', 'hk', 'ha' pro srdcové karty,

takže např objekt h2, reprezentující srdcovou dvojku bude vypadat takto:

const h2 = {
  name: 'h2',
  src: 'images/2_of_hearts.svg.png',
  rubSrc: 'images/reverse.png',
  hodnota: 2,
  rub: false
}
*/



function zobrazPoleKaret(pole) {
  pole.forEach(element =>{
    zobrazKartu(element)
  })
}




//console.log('pole diamonds',diamonds)

let allCards=[...diamonds, ...clubs, ...hearts, ...spades]

allCards=[...allCards, ha,ha,ha]

allCards=[]

//přidat na konec

allCards.push(ha)
allCards.push(sa)

//přidat na začátek

allCards.unshift(h2)

//uber poslední

let karta=allCards.pop()

console.log('karta=',karta)

//uber první
karta=allCards.shift()

console.log('karta=',karta)

//plnění pole

allCards=[h2,h3,h4,h5,h6]

//zaplní srdcovým esem od indexu 1 až do indexu 2 (index 3 už nezahrne)
allCards.fill(ha,1,3)

zobrazPoleKaret(allCards)


