const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")

let currentActive = 1

next.addEventListener("click", () => {
    currentActive++

    //apply restriction/ condition
    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener("click", () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, indx) => {
        if(indx < currentActive) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })

    const actives = document.querySelectorAll(".active")

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%"
// This line of code sets the width of the progress bar based on the number of active circles.
// `actives.length - 1` gives the number of active steps minus one.
// `circles.length - 1` gives the total number of steps minus one.
// Dividing these two values gives the fraction of the progress completed.
// Multiplying by 100 converts this fraction to a percentage.
// Adding "%" converts the number to a percentage string that can be used as a CSS width value give to progress bar in css file see line 42 and 54.


// Disable 'prev' button if on first circle, disable 'next' button if on last circle, otherwise enable both buttons
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}