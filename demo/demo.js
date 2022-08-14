const create_sample = require("..")

const opt1 = { min: 1, max: 150 } 
const opt2 = { min: 1872, max: 2022 }

const input1 = create_sample(opt1)
const input2 = create_sample(opt2)

const Title = "Crystals International Football Academy Form."
const Subtitle = "Please fill out the forms"

const page = document.createElement("div")
page.innerHTML = `
    <h1> ${Title} </h1>
    <h2> ${Subtitle} </h2>
    <h3>Enter your age:</h3>
    <x></x>
    <h4>Enter your year of birth:</h4>
    <y></y>
`
page.querySelector("x").replaceWith(input1)
page.querySelector("y").replaceWith(input2)
document.body.append(page)