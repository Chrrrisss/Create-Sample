const create_sample = require("..")

const input1 = create_sample()
const input2 = create_sample()

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