// Déclaration de variables
let switch1 = document.querySelector(".form-check-input")
console.log(switch1)
let div = document.querySelector(".redsquare-app")
let rocket = document.querySelector(".square")
let buttons = document.querySelectorAll(".redsquare-controls button")
let scaleUp = document.querySelector("#scaleUp")
let scaleDown = document.querySelector('#scaleDown')
let shapeCircle = document.querySelector('#shapeCircle')
let shapeSquare = document.querySelector('#shapeSquare')

// Ajouter supprimer des classes
switch1.addEventListener('click',function() {
    // Le faire sur tous les boutons
    for (const button of buttons) {
        // Si le bouton a un attribut désactivé alors exécuter
        if (button.hasAttribute('disabled') == true) {
            div.classList.add("is-active")
            button.removeAttribute("disabled")
            button.classList.remove("btn-light")
            button.classList.add("btn-primary")
        }
        // Sinon ne pas l'exécuter
        else {
            div.classList.remove("is-active")
            button.setAttribute("disabled",'')
            button.classList.remove("btn-primary")
            button.classList.add("btn-light")
        }
    }
})

// Agrandir l'icône
scaleUp.addEventListener('click',function() {
    var width = rocket.clientWidth
    var height = rocket.clientHeight
    rocket.style.width = (width + 20) + "px";
    rocket.style.height = (height + 20) + "px";
})

// Rétrécir l'icône
scaleDown.addEventListener('click',function() {
    var width = rocket.clientWidth
    var height = rocket.clientHeight
    if (rocket.style.width < 50 + "px") {
    rocket.style.width = (width - 20) + "px";
    rocket.style.height = (height - 20) + "px";
    }
})

// Mettre sous la forme d'un cercle
shapeCircle.addEventListener('click',function() {
    rocket.style.borderRadius = 1000 + "px"
})

// Mettre sous la forme d'un carré
shapeSquare.addEventListener('click',function() {
    rocket.style.borderRadius = 0 + "px"
}) 

// Déplacer l'icône lorsque l'utilisateur touche les flèches directionnelles du clavier
window.addEventListener('keydown', (e) => {
    var marginTop = rocket.style.marginTop;
    marginTop = Number(marginTop.replace('px',''))
    var marginLeft = rocket.style.marginLeft
    marginLeft = Number(marginLeft.replace('px',''))
    var marginBottom = rocket.style.marginBottom
    marginBottom = Number(marginBottom.replace('px',''))
    var marginRight = rocket.style.marginRight
    console.log(marginRight)
    marginRight = Number(marginRight.replace('px',''))

    if(e.key === "ArrowUp") {
        rocket.style.marginTop = (marginTop - 20) + "px";
        rocket.style.marginBottom = (marginBottom + 20) + "px";
    }

    if(e.key === "ArrowDown") {
        rocket.style.marginBottom = (marginBottom - 10) + "px";
        rocket.style.marginTop = (marginTop + 20) + "px";
    }

    if(e.key === "ArrowRight") {
        rocket.style.marginRight = (marginRight - 20) + "px";
        rocket.style.marginLeft = (marginLeft + 20) + "px";
    }

    if(e.key === "ArrowLeft") {
        rocket.style.marginLeft = (marginLeft - 20) + "px";
        rocket.style.marginRight = (marginRight + 20) + "px";
        }
});