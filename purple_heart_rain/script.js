function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-style');

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    heart.innerText = "💜";
    document.body.appendChild(heart)
  
    setTimeout(() => {
        heart.remove()
    }, 2000);
} 

function createCodersclan() {
    const codersClan = document.createElement('div');
    codersClan.classList.add('coders-style');

    codersClan.style.left = Math.random() * 100 + "vw";

    codersClan.style.animationDuration = Math.random() * 2 + 3 + "s";

    codersClan.innerText = "codersclan";
    document.body.appendChild(codersClan)
  
    setTimeout(() => {
        codersClan.remove()
    }, 2000);
} 

setInterval(createHeart, 600);
setInterval(createCodersclan, 1000);