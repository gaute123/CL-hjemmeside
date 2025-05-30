/* bildeglider */
const track = document.getElementById("image-track");
const isMobile = window.innerWidth <= 768
const h1El = document.getElementById("h1")
const pEl = document.querySelector(".gerrard")
const originalTekst = h1El.innerHTML
const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

function sjekkSkjerm() {
    if (window.innerWidth <= 768) {
        h1El.innerHTML = "THE CHAMPIONS LEAGUE"
        pEl.style.display = "none"
    } else {
        h1El.innerHTML = originalTekst
        pEl.style.display = "block"
    }
}
sjekkSkjerm()

window.addEventListener("resize", sjekkSkjerm);

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });

    for (const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
    }
}

if (!isMobile) {
    window.onmousedown = e => handleOnDown(e);

    window.ontouchstart = e => handleOnDown(e.touches[0]);

    window.onmouseup = e => handleOnUp(e);

    window.ontouchend = e => handleOnUp(e.touches[0]);

    window.onmousemove = e => handleOnMove(e);

    window.ontouchmove = e => handleOnMove(e.touches[0]);
}

/* burgermeny */
const burger = document.querySelector(".burgerMeny")
const meny = document.getElementById("clMeny")
const sesongToggler = document.getElementById("sesongToggler")

if (burger && meny) {
    burger.onclick = function () {
        meny.classList.toggle("vis")
    }
}

if (sesongToggler) {
    sesongToggler.onclick = function (e) {
        e.preventDefault()
        const dropdown = this.parentElement
        dropdown.classList.toggle("vis")
    }
}










