const playListe = ["Low", "Hardest to love", "The morning", "SOS", "Homecoming", "Love Galore", "Keep The Family Close", "F2F", "Fire + Water", "Pluto's Last Comet"];

playListe.forEach(visEnAfGangen);

function visEnAfGangen(playListe) {
  console.log(playListe + " er en sang");
  document.querySelector("#display").innerHTML += `<li>${playListe}</li>`;
}
