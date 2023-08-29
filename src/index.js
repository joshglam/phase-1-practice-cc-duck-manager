const duckNav = document.querySelector("#duck-nav");
const duckDisplayed = document.querySelector("#duck-display");
const duckDisplayName = document.querySelector("#duck-display-name");
const duckDisplayImage = document.querySelector("#duck-display-image");
const duckDisplayLikes = document.querySelector("#duck-display-likes");
const duckForm = document.querySelector("#new-duck-form");


fetch("http://localhost:3000/ducks")
.then(res => res.json())
.then(ducks => {
    // display first duck
    duckDisplayName.textContent = ducks[0].name
    duckDisplayImage.src = ducks[0].img_url
    duckDisplayLikes.textContent = ducks[0].likes
    
    ducks.forEach(duck => {
        //create an img for each duck and appent to nav
        const createImgElement = document.createElement("img")
        createImgElement.src = duck.img_url
        createImgElement.alt = duck.name
        duckNav.append(createImgElement)

        createImgElement.addEventListener("click", e => {
            duckDisplayName.textContent = duck.name
            duckDisplayImage.src = duck.img_url
            duckDisplayLikes.textContent = duck.likes
        })
    })
    
    duckDisplayLikes.addEventListener("click", e => {
        const currentLikes = parseInt(duckDisplayLikes.textContent)
        const newTotal = currentLikes + 1
        duckDisplayLikes.textContent = newTotal
    })
    
    duckForm.addEventListener("submit", e => {
        e.preventDefault()
        const duckNameInput = e.target['duck-name-input'].value
        const duckImageInput = e.target['duck-image-input'].value

        const NewDuck = {
            name: duckNameInput,
            img_url: duckImageInput,
            likes: 0
        }

    const createImgElement = document.createElement("img")
        createImgElement.src = duckImageInput
        createImgElement.alt = duckNameInput
        duckNav.append(createImgElement)

        createImgElement.addEventListener("click", e =>{
            duckDisplayName.textContent = duckNameInput
            duckDisplayImage.src = duckImageInput
            duckDisplayLikes.textContent = 0
        })
    })
})