document.addEventListener("DOMContentLoaded", async () => {

    try {

        const response = await fetch("viaggio.json");

        if (!response.ok) {
            throw new Error(`Errore caricamento JSON: ${response.status}`);
        }

        const dati = await response.json();

        document.getElementById("titolo").textContent = dati.titolo;

        const home = document.getElementById("home");

        dati.giorni.forEach(giorno => {

            const giornoDiv = document.createElement("div");
            giornoDiv.className = "giorno";

            giornoDiv.innerHTML = `
                <h2>${giorno.giorno}</h2>
                <div class="data">${giorno.data}</div>
            `;

            creaSezione("Mattino", giorno.mattino, giornoDiv);
            creaSezione("Pomeriggio", giorno.pomeriggio, giornoDiv);
            creaSezione("Sera", giorno.sera, giornoDiv);

            home.appendChild(giornoDiv);
        });

    } catch (err) {

        console.error(err);

        document.getElementById("home").innerHTML = `
            <div style="color:red">
                Errore caricamento dati: ${err.message}
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

    const htmlAttivita = attivita.map(item => `

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

    `).join("");

    sezione.innerHTML = `
        <h3>${titolo}</h3>
        ${htmlAttivita}
    `;

    contenitore.appendChild(sezione);
}