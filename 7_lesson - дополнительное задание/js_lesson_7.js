let bat = document.querySelector("#batman"),
    btn = document.querySelector(".btn"),
    step = 0,
    position = 0;
   
function fly() {
    step += 5;

    let id = requestAnimationFrame(fly); 
    if(position == 300) {
        cancelAnimationFrame(id);
    } else {
        position++;
        bat.style.left = step + "px";
    }  
}

btn.addEventListener("click", fly);
