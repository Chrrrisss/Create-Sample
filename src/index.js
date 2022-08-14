module.exports = create_sample

const sheet = new CSSStyleSheet
const theme = fetch_theme()
sheet.replaceSync(theme)

function create_sample () {
    const el = document.createElement("div")
    const shadow = el.attachShadow({ mode: "closed" })
    shadow.innerHTML = `
    <input></input>
    `
    shadow.adoptedStyleSheets = [sheet]
    
    return el
}

function fetch_theme () {
    return `
    input {
        padding: 4px, 8px;
        background-color: hsla(24, 40%, 37%, 1);
        padding: 8px, 12px;
        border-radius: 8px;
        height: 20px;
    }
    input:focus {
        background-color: hsla(111, 22%, 37%, 1);
        padding; 20px 40px;
        height: 30px;
    }
    `
}