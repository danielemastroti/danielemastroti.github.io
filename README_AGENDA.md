# 📅 Sito Web Agenda Viaggio

## 🎯 Panoramica

Applicazione web statica per gestire un'agenda di viaggio divisa in 20 giorni. Design elegante e professionale ottimizzato per mobile e desktop.

## 🌐 URL Applicazione

**Live App:** https://agenda-mobile-6.preview.emergentagent.com

## ✨ Funzionalità

### 📱 Pagine Principali

1. **Agenda** - Visualizzazione giornaliera delle attività
   - 20 giorni navigabili
   - Suddivisione in Mattina, Pomeriggio, Sera
   - Attività con orario, titolo, descrizione e link opzionali
   - Funzione stampa integrata

2. **Distanze** - Tratte del viaggio
   - Percorsi con chilometri e tempi di percorrenza
   - Note e suggerimenti per ogni tratta

3. **Documenti** - Lista documenti necessari
   - Documenti di identità, viaggio, sanitari, finanziari
   - Badge "OBBLIGATORIO" per documenti essenziali
   - Numeri di emergenza e contatti utili

### 🎨 Design

- **Tipografia elegante**: Cormorant Garamond per i titoli, Manrope per il testo
- **Palette professionale**: Toni neutri (#F9F9F7 background, #121212 testo)
- **Glassmorphism**: Header con effetto vetro smerigliato
- **Timeline colorata**: Colori distintivi per Mattina (#D4C5B9), Pomeriggio (#A3B1A6), Sera (#2C3E50)
- **Mobile-first**: Ottimizzato per smartphone e tablet

## 📝 Come Modificare i Dati

### Posizione dei File YAML

I file di configurazione si trovano in:
```
/app/frontend/public/
├── agenda.yaml      # Dati dell'agenda
├── distances.yaml   # Dati delle distanze
└── documents.yaml   # Dati dei documenti
```

### 1. Modificare l'Agenda (`agenda.yaml`)

#### Struttura Base

```yaml
days:
  - id: 1
    name: "Giorno 1"
    date: "Lunedì 15 Gennaio"
    morning:
      - time: "08:00"
        title: "Colazione al hotel"
        description: "Buffet completo con vista panoramica"
        link: ""
    afternoon:
      - time: "13:00"
        title: "Pranzo"
        description: "Ristorante tipico"
        link: "https://www.ristorante.it"
    evening:
      - time: "20:00"
        title: "Cena"
        description: "Menu degustazione"
        link: ""
```

#### Regole

- **id**: Numero progressivo da 1 a 20
- **name**: Nome del giorno (es. "Giorno 1", "Giorno 2")
- **date**: Data leggibile (es. "Lunedì 15 Gennaio")
- **morning/afternoon/evening**: Sezioni opzionali
  - **time**: Orario formato "HH:MM"
  - **title**: Titolo dell'attività (obbligatorio)
  - **description**: Descrizione (opzionale, lasciare "" se vuoto)
  - **link**: URL esterno (opzionale, lasciare "" se non serve)

#### Esempio: Aggiungere un'Attività

```yaml
morning:
  - time: "08:00"
    title: "Colazione"
    description: "Buffet hotel"
    link: ""
  - time: "10:00"
    title: "Visita guidata"
    description: "Tour del centro storico"
    link: "https://www.tour.com"
```

### 2. Modificare le Distanze (`distances.yaml`)

#### Struttura Base

```yaml
title: "Distanze e Tempi di Viaggio"
description: "Tutte le tratte del viaggio con chilometri e tempi stimati"

routes:
  - from: "Hotel Centro Città"
    to: "Museo Nazionale"
    distance: "3.5 km"
    duration: "15 minuti"
    notes: "Traffico moderato al mattino"

tips:
  - "Considera 30 minuti extra per il traffico nelle ore di punta"
  - "GPS consigliato per le strade di campagna"
```

#### Regole

- **from**: Punto di partenza
- **to**: Destinazione
- **distance**: Distanza (es. "3.5 km", "150 km")
- **duration**: Tempo di percorrenza (es. "15 minuti", "2 ore")
- **notes**: Note aggiuntive (opzionale)
- **tips**: Lista di suggerimenti generali

### 3. Modificare i Documenti (`documents.yaml`)

#### Struttura Base

```yaml
title: "Documenti Necessari"
description: "Lista completa dei documenti da portare"

categories:
  - name: "Documenti di Identità"
    items:
      - title: "Carta d'identità"
        required: true
        notes: "Valida, non scaduta"
      - title: "Passaporto"
        required: false
        notes: "Solo per viaggi internazionali"

important_numbers:
  - service: "Emergenza"
    number: "112"
  - service: "Polizia"
    number: "113"

contacts:
  - name: "Hotel Centro Città"
    phone: "+39 02 1234 5678"
    email: "info@hotelcentro.it"
```

#### Regole

- **categories**: Lista di categorie
  - **name**: Nome categoria
  - **items**: Lista documenti
    - **title**: Nome documento
    - **required**: `true` per obbligatorio, `false` per opzionale
    - **notes**: Note aggiuntive (opzionale)
- **important_numbers**: Numeri di emergenza
- **contacts**: Contatti utili con phone ed email

## 🔄 Applicare le Modifiche

### Metodo 1: Modifica Diretta (Consigliato)

1. Modifica i file YAML in `/app/frontend/public/`
2. Salva il file
3. Ricarica la pagina del browser (F5 o Cmd+R)
4. Le modifiche saranno immediatamente visibili

### Metodo 2: Via Backend

Se hai modificato i file e non vedi i cambiamenti:

```bash
# Riavvia il backend (opzionale)
cd /app/backend
sudo supervisorctl restart backend
```

## 🖨️ Funzione Stampa

1. Apri la pagina Agenda
2. Clicca sul bottone "Stampa" in alto a destra
3. Si aprirà la finestra di stampa del browser
4. Layout ottimizzato per stampa:
   - Nasconde navigation e bottoni
   - Rimuove colori di sfondo
   - Testo nero su bianco
   - Layout A4-friendly

## 📱 Visualizzazione Mobile

- **Bottom Navigation**: Barra fissa in basso per navigare tra le pagine
- **Day Selector**: Scroll orizzontale per i giorni
- **Layout Responsive**: Adattamento automatico a qualsiasi dimensione schermo
- **Touch-Friendly**: Bottoni e aree cliccabili ottimizzate per touch

## 🎯 Caratteristiche Tecniche

### Frontend
- **Framework**: React 19
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS + Custom CSS
- **Icons**: Lucide React
- **YAML Parser**: js-yaml

### Backend
- **Framework**: FastAPI (Python)
- **Endpoints**:
  - `GET /api/agenda` - Serve agenda.yaml
  - `GET /api/distances` - Serve distances.yaml
  - `GET /api/documents` - Serve documents.yaml

### Design System
- **Primary Font**: Cormorant Garamond (serif)
- **Secondary Font**: Manrope (sans-serif)
- **Mono Font**: JetBrains Mono
- **Colors**:
  - Background: `#F9F9F7`
  - Text: `#121212`
  - Timeline Morning: `#D4C5B9`
  - Timeline Afternoon: `#A3B1A6`
  - Timeline Evening: `#2C3E50`

## 🐛 Risoluzione Problemi

### I dati non si aggiornano

1. Controlla la sintassi YAML (indentazione corretta, nessun carattere speciale non codificato)
2. Svuota cache del browser (Ctrl+Shift+R o Cmd+Shift+R)
3. Verifica che i file YAML siano in `/app/frontend/public/`

### Errore di sintassi YAML

- Usa un validatore YAML online (es. https://www.yamllint.com/)
- Controlla che l'indentazione sia corretta (2 spazi per livello)
- Assicurati che le stringhe con caratteri speciali siano tra virgolette

### La pagina non si carica

1. Verifica che i servizi siano attivi:
   ```bash
   sudo supervisorctl status
   ```
2. Controlla i log:
   ```bash
   tail -n 50 /var/log/supervisor/frontend.out.log
   tail -n 50 /var/log/supervisor/backend.out.log
   ```

## 📚 Esempi

### Aggiungere un Nuovo Giorno

```yaml
- id: 21
  name: "Giorno 21"
  date: "Domenica 4 Febbraio"
  morning:
    - time: "10:00"
      title: "Colazione tardiva"
      description: "Relax"
      link: ""
  afternoon:
    - time: "15:00"
      title: "Rientro a casa"
      description: "Fine viaggio"
      link: ""
  evening: []
```

### Aggiungere una Tratta

```yaml
- from: "Aeroporto"
  to: "Casa"
  distance: "45 km"
  duration: "1 ora"
  notes: "Autostrada diretta"
```

## 🎉 Crediti

Sviluppato con Emergent Agent  
Design: Luxury & Swiss High-Contrast Theme  
Font: Google Fonts (Cormorant Garamond, Manrope, JetBrains Mono)
