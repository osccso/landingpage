const $form = document.querySelector("#form")
const $buttonMailto = document.querySelector("#hidden-link")

$form.addEventListener('submit',handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('email'))
    $buttonMailto.setAttribute('href',`mailto:bookmark@bookmark.com?subject=Information Request&body=Hi, this is ${form.get('email')} and I'd love to know more about your product !`)
    $buttonMailto.click()
}

//carousel slide animation, when event triggers capture active slide(from) and selected slide(to)

let carruselFcn = document.getElementById("carouselExampleIndicators")
.addEventListener('slide.bs.carousel',e => slideButtonAnimation(e.from,e.to))


function slideButtonAnimation(num1,num2) {
    //get elements from DOM
    let slidebtn1 = document.getElementById("slidebtn1")
    let slidebtn2 = document.getElementById("slidebtn2")
    let slidebtn3 = document.getElementById("slidebtn3")

    // dispatch tables
    let fromTable = {
        0 : () => slidebtn1.classList.remove("slider-selected"),
        1 : () => slidebtn2.classList.remove("slider-selected"),
        2 : () => slidebtn3.classList.remove("slider-selected"),
        undefined
    }
    let toTable = {
        0 : () => slidebtn1.classList.add("slider-selected"),
        1 : () => slidebtn2.classList.add("slider-selected"),
        2 : () => slidebtn3.classList.add("slider-selected"),
        undefined
    }    
    //apply styles accordingly
    fromTable[num1]()
    toTable[num2]()
}

