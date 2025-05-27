/* faktaboks */
const faktaBoks = document.getElementById("faktaBoks")
const aapneFakta = document.getElementById("aapneFakta")
const lukkFakta = document.getElementById("lukkFakta")

aapneFakta.addEventListener("click", () => {
    faktaBoks.classList.add("aktiv")
    aapneFakta.style.display = "none"
})

lukkFakta.addEventListener("click", () => {
    faktaBoks.classList.remove("aktiv")
    aapneFakta.style.display = "flex"
})
