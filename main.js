const menuIcon = document.querySelector("#menu-icon")
const closeIcon = document.querySelector("#close-icon")
const ulList = document.querySelector("ul")
const showCase = document.querySelector(".showcase")

menuIcon.addEventListener("click", function() {
    menuIcon.style.display = "none"
    closeIcon.style.display = "block"
    ulList.style.display = "block"
    ulList.style.paddingTop = "40px"
    ulList.style.fontSize = "30px"
    ulList.style.paddingRight = "15px"
    showCase.style.display = "fixed"
})

closeIcon.addEventListener("click", function() {
    menuIcon.style.display = "block"
    closeIcon.style.display = "none"
    ulList.style.display = "none"

})
