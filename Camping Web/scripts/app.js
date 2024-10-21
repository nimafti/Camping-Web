const navBtn = document.querySelector(".nav__btn")
const navMenu = document.querySelector(".nav-menu")

let navOpen = false;
navBtn.addEventListener("click", function () {
    if (navOpen) {
        navBtn.classList.remove("nav__btn--open")
        navMenu.classList.remove("nav-menu--open")
        navOpen = false
    } else {
        navBtn.classList.add("nav__btn--open")
        navMenu.classList.add("nav-menu--open")
        navOpen = true
    }
})

const like = document.querySelectorAll(".place__like-icon")
for (let i=0; i<like.length; i++){
    let destLike = false;
    like[i].addEventListener("click", function () {
        if (destLike) {
            like[i].classList.remove("place__like-icon--fill")
            destLike = false
        } else {
            like[i].classList.add("place__like-icon--fill")
            destLike = true
        }
    })
}

