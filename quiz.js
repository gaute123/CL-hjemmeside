const spørsmål = [
    {
        tekst: "Hvilket lag har vunnet Champions League flest ganger?",
        alternativer: ["AC Milan", "Real Madrid", "Barcelona", "Bayern München"],
        riktig: "Real Madrid"
    },
    {
        tekst: "Hvem har scoret flest mål i én sesong?",
        alternativer: ["Lewandowski", "Cristiano Ronaldo", "Messi", "Benzema"],
        riktig: "Cristiano Ronaldo"
    },
    {
        tekst: "Hvilket lag har tapt flest finaler?",
        alternativer: ["Juventus", "Liverpool", "Real Madrid", "Atletico Madrid"],
        riktig: "Juventus"
    },
    {
        tekst: "Hvem har flest assist i Champions League-historien?",
        alternativer: ["Messi", "Cristiano Ronaldo", "De Bruyne", "Xavi"],
        riktig: "Cristiano Ronaldo"
    },
    {
        tekst: "Hvem har flest røde kort i CL (4 røde)?",
        alternativer: ["Zidane", "Ramos", "Pepe", "Ronaldinho"],
        riktig: "Ramos"
    },
    {
        tekst: "Hvem har vunnet Champions League flest ganger som spiller?",
        alternativer: ["Cristiano Ronaldo", "Messi", "Paco Gento", "Xavi"],
        riktig: "Paco Gento"
    },
    {
        tekst: "Hvem har tapt tre finaler som spiller?",
        alternativer: ["Buffon og Maldini", "Ramos og Benzema", "Neuer og Lahm", "Kroos og Modric"],
        riktig: "Buffon og Maldini"
    }
]

let nåværendeSpørsmål = 0
let poeng = 0

const spørsmålEl = document.getElementById("spørsmålstekst")
const alternativerEl = document.getElementById("svaralternativer")
const nesteBtn = document.getElementById("neste")
const resultatEl = document.getElementById("resultat")

function visSpørsmål() {
    const sp = spørsmål[nåværendeSpørsmål]
    spørsmålEl.textContent = sp.tekst
    alternativerEl.innerHTML = ""

    sp.alternativer.forEach(svar => {
        const div = document.createElement("div")
        div.className = "svar"
        div.textContent = svar
        div.onclick = () => velgSvar(svar)
        alternativerEl.appendChild(div)
    });

    nesteBtn.style.display = "none"
}

function velgSvar(valgt) {
    const sp = spørsmål[nåværendeSpørsmål]
    if (valgt === sp.riktig) {
        poeng++
    }

    const alleSvar = document.querySelectorAll(".svar")
    alleSvar.forEach(el => {
        el.style.pointerEvents = "none"
        if (el.textContent === sp.riktig) {
            el.style.backgroundColor = "green"
        } else if (el.textContent === valgt) {
            el.style.backgroundColor = "red"
        }
    });

    nesteBtn.style.display = "block"
}

nesteBtn.onclick = () => {
    nåværendeSpørsmål++
    if (nåværendeSpørsmål < spørsmål.length) {
        visSpørsmål()
    } else {
        visResultat()
    }
};

function visResultat() {
    spørsmålEl.style.display = "none"
    alternativerEl.style.display = "none"
    nesteBtn.style.display = "none"
    resultatEl.textContent = `Du fikk ${poeng} av ${spørsmål.length} riktige! ⚽`
}

visSpørsmål();