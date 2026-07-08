document.addEventListener("DOMContentLoaded", async () => {

    try {

        const response = await fetch("viaggio.json");

        if (!response.ok) {
            throw new Error(`Errore caricamento JSON (${response.status})`);
        }

        const dati = await response.json();

        document.getElementById("titolo").textContent = dati.titolo;

        const home = document.getElementById("home");

        dati.giorni.forEach(giorno => {

            const card = document.createElement("div");
            card.className = "giorno";

            card.innerHTML = `
                <h2>${giorno.giorno}</h2>
                <div class="data">${giorno.data}</div>
            `;

            creaSezione("Mattino", giorno.mattino, card);
            creaSezione("Pomeriggio", giorno.pomeriggio, card);
            creaSezione("Sera", giorno.sera, card);

            home.appendChild(card);

        });

    } catch (errore) {

        console.error("Errore:", errore);

        document.getElementById("home").innerHTML = `
            <div style="
                background:#ffe5e5;
                color:#c00000;
                padding:15px;
                border-radius:8px;
            ">
                Errore caricamento dati: ${errore.message}
            </div>
        `;
    }

});


function creaSezione(titolo, attivita, contenitore) {

    if (!attivita || attivita.length === 0) {
        return;
    }

    const sezione = document.createElement("div");
    sezione.className = "sezione";

    let html = `<h3>${titolo}</h3>`;

    attivita.forEach(item => {

        html += `
            <div class="attivita">

                <div class="ora">
                    ${item.ora}
                </div>

                <div class="nome">
                    ${
                        item.link
                        ? `
                            ${item.link}
                        `
                        : item.nome
                    }
                </div>

            </div>
        `;
    });

    sezione.innerHTML = html;

    contenitore.appendChild(sezione);
}