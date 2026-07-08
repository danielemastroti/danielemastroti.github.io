document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("viaggio.json");
        const dati = await response.json();

        document.getElementById("titolo").textContent = dati.titolo;

        const home = document.getElementById("home");

        dati.giorni.forEach(giorno => {

            const giornoDiv = document.createElement("div");
            giornoDiv.className = "giorno";

            giornoDiv.innerHTML = `
                <h2>${giorno.giorno}</h2>
                <p><strong>Data:</strong> ${giorno.data}</p>
            `;

            creaSezione("Mattino", giorno.mattino, giornoDiv);
            creaSezione("Pomeriggio", giorno.pomeriggio, giornoDiv);
            creaSezione("Sera", giorno.sera, giornoDiv);

            home.appendChild(giornoDiv);
        });

    } catch (errore) {
        console.error("Errore caricamento JSON:", errore);
    }
});


function creaSezione(titolo, attivita, contenitore) {

    if (!attivita || attivita.length === 0) return;

    const sezione = document.createElement("div");
    sezione.className = "sezione";

    const htmlAttivita = attivita.map(item => `
        <div class="attivita">
            <strong>${item.ora}</strong> - ${item.nome}
            ${item.maps ? ` | ${item.maps}>` : ""}
        </div>
    `).join("");

    sezione.innerHTML = `
        <h3>${titolo}</h3>
        ${htmlAttivita}
    `;

    contenitore.appendChild(sezione);
}