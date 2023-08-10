let btn = document.getElementById("button")
let navbarRes = document.getElementsByClassName("navigation")[0]
btn.addEventListener("click", function() {
    if (this.classList.contains("active")) {
        this.classList.remove("active")
        this.classList.add("not-active")
        navbarRes.classList.remove('nav-show')
        navbarRes.classList.add('nav-hidden')
    } else {
        this.classList.add("active")
        this.classList.remove("not-active")

        navbarRes.classList.remove('nav-hidden')
        navbarRes.classList.add('nav-show')
    }
})


let hidden = document.querySelectorAll(".hidden-right")
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-right")

        }
    })
})

hidden.forEach((el) => observer.observe(el))
console.log(window.scrollY);
let li = Array.from(document.getElementsByTagName('li'))
let navbar = document.getElementById("navbar")
let body = document.getElementsByTagName("body")[0]
console.log(body.scrollTop);
let lastScrollTop = 0
window.addEventListener("scroll", function() {

    var scrollTop = window.scrollY || document.documentElement.scrollTop
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px"
        lastScrollTop = scrollTop
    } else {

        navbar.style.top = "0"
        lastScrollTop = scrollTop
    }
})


li.forEach(value => {
    value.addEventListener("click", () => {

        if (navbarRes.classList.contains("nav-show")) {
            console.log("halo");
            btn.classList.remove("active")
            btn.classList.add("not-active")
            navbarRes.classList.remove("nav-show")
            navbarRes.classList.add("nav-hidden")

        }
    })
})

let copy = document.getElementById("slider").cloneNode(true)
document.querySelector(".carousel").appendChild(copy)
console.log(copy);