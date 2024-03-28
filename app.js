function menjanjeBoje(boja) {
    let obrisidugme = document.getElementsByClassName("obrisi");
    console.log(obrisidugme);
    for(const dugme of obrisidugme) {
        dugme.style.backgroundColor = boja;
    }
}

menjanjeBoje("blue");
let menjanjeBojeA = (boja) => {
    let obrisidugme = document.getElementsByClassName("obrisi");
    console.log(obrisidugme);
    for(const dugme of obrisidugme) {
        dugme.style.backgroundColor = boja;
    }
}

menjanjeBojeA("green");

let menjanjeBojeB = (boja) => Array.from(document.getElementsByClassName("obrisi")).forEach(dugme => dugme.style.backgroundColor = boja);

menjanjeBojeB("pink");

let obrisidugme = document.getElementsByClassName("obrisi");
for (const dugme of obrisidugme) {
    dugme.addEventListener("click", function (e) {
        console.log(this);
        const li = e.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    })
}

function dodajDestinaciju(event) {
    event.preventDefault();
    let input = document.querySelector("#dodaj-destinaciju input");
    let nazivDestinacije = inputPolje.value.trim();
    if(nazivDestinacije) {
        let lista = document.getElementById("lista");
        let novaStavka = document.createElement("li");
        novaStavka.innerHTML = `<span class="naziv">${nazivDestinacije}</span>
        <span class="obrisi">obriši</span>`;
        lista.appendChild(novaStavka);
        inputPolje.value = "";
    }
}

let forma = document.forms["dodaj-destinaciju"];
forma.addEventListener("submit", dodajDestinaciju);