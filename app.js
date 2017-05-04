var superheroList = [
  {
    name: "Spiderman",
    number: "800-WEB-CRWL",
    group: "Marvel",
    img: "http://i.annihil.us/u/prod/marvel/i/mg/2/00/53710b14a320b.png"
  },
  {
    name: "The Incredible Hulk",
    number: "800-HLK-SMSH",
    group: "Marvel",
    img: "https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_%28comics_character%29.png"
  },
  {
    name: "Wonder Woman",
    number: "800-GRL-WNDR",
    group: "DC",
    img: "https://upload.wikimedia.org/wikipedia/en/b/b5/WonderWomanNew52.jpg"
  },
  {
    name: "Storm",
    number: "800-DRK-CLDS",
    group: "Marvel",
    img: "http://vignette2.wikia.nocookie.net/marveldatabase/images/2/2a/Thors_Vol_1_3_Keown_Variant_Textless.jpg/revision/latest?cb=20150807030803"
  },
  {
    name: "Iron Man",
    number: "800-STA-RKME",
    group: "Marvel",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGhJns53xWPYbU3Tw1kxtx_ZmxXalO-CeCCFjbLDI2XxxnXjknTQ"
  },
  {
    name: "Black Panther",
    number: "800-TCH-ALLA",
    group: "Marvel",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmfQbIlmkERLDHm9Cj8zFHwPoNXO1W0SLLyZdYv9ZBwdmd1Xw4g"
  },
  {
    name: "Princess Peach",
    number: "800-NO-DAMSL",
    group: "Independent",
    img: "http://www.wikihow.com/images/c/c2/Draw-Princess-Peach-Step-11.jpg"
  },
  {
    name: "Batman",
    number: "800-DRK-NITE",
    group: "DC",
    img: "https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg"
  },
  {
    name: "Supergirl",
    number: "800-KYR-PTON",
    group: "DC",
    img: "https://s-media-cache-ak0.pinimg.com/736x/f8/ba/0e/f8ba0ed7fea1734523635171ef731f0c.jpg"
  }
]



angular
.module("superHero", [])
.controller("superHerosController", [
  superHerosControllerFuncttion
])

function superHerosControllerFuncttion() {
  this.superHeros = superheroList
}
