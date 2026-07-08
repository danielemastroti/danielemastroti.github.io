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

