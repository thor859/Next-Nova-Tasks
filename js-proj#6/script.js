const boxes= document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes()

/**
 * Logs the inner height of the window to the console.
 * 
 * The `window.innerHeight` property returns the interior height of the window in pixels, including the height of the horizontal scroll bar, if present.
 * 
 * To check the inner height of the window, you can call this function and observe the logged value in the browser's console.
 */



function checkBoxes() {
    // console.log(window.innerHeight);

    const triggerBottom = window.innerHeight / 5 * 4;
    /**
 * 
 * The triggerBottom is calculated as four-fifths (4/5) of the window's inner height.
 * This is done by dividing the window's inner height by 5 and then multiplying by 4.
 * This value is used to determine when a box should be considered "in view" or "triggered".
 */
boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top
    if(boxTop < triggerBottom) {
        box.classList.add('show');
    }
    else {
        box.classList.remove('show');
    }
})
}
