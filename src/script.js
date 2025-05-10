function generarCarta() {
    const palos = ['♦', '♥', '♠', '♣'];
    const clases = ['diamond', 'heart', 'spade', 'club'];
    const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    const paloIndex = Math.floor(Math.random() * palos.length);
    const valorIndex = Math.floor(Math.random() * valores.length);

    const carta = document.getElementById('carta');

    carta.className = 'card size-grande';

    carta.classList.add(clases[paloIndex]);

    const simbolo = palos[paloIndex];
    const valor = valores[valorIndex];
    carta.innerHTML = `
      <div class="corner top">${valor}<br>${simbolo}</div>
      <div class="center">${simbolo}</div>
      <div class="corner bottom">${valor}<br>${simbolo}</div>
    `;
}

setInterval(generarCarta, 10000);