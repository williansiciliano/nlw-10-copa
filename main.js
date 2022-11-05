function createGame(player1, hour, player2) {
    return `
    <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    `
}

let delay = -0.4; // iniciando o valor da variável 'delay' para -0.4 segundos que, somando a '0,4' depois, fica ZERO.

function createCard(date, day, games) { // esta função cria uma div class = "card" (cartãozinho de uma partida na agenda), que era o conteúdo da <main id="cards">
    delay = delay + 0.4; // a cada card criado será adicionado 0.3s ao delay da animação (só podemos botar número na declaração da variável (0.3))
    return ` 
    <div class="card" style="animation-delay: ${delay}s" >
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}        
        </ul>
    </div>
    `
} // recortamos e colamos o conteúdo de <main id="cards"> nesta função e reposicionamos, lá no mesmo local anterior, este mesmo conteúdo através da chamada desta função, que tem exatamente o mesmo conteúdo anterior da <main id="cards"> 

document.querySelector("#cards").innerHTML = 
    createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
    createCard("28/11", "segunda", createGame("brazil", "13:00", "switzerland") + createGame("portugal", "16:00", "uruguay")) +
    createCard("02/12", "sexta", createGame("cameroon", "16:00", "brazil"))                 
    
