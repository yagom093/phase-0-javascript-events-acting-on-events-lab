// Move Dodger right code
function moveDodgerLeft() {
    const leftNumbers= dodger.style.left.replace("px","")
    const left = parseInt(leftNumbers, 10)
    if(left < 350) {
        dodger.style.left = `${left - 2}px`
    }
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})


function moveDodgerRight() {
    const leftNumbers= dodger.style.left.replace("px","")
    const left = parseInt(leftNumbers, 10)
    if(left < 360) {
        dodger.style.left = `${left + 1}px`
    }
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})