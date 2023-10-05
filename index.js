let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let player ={
    Name:"Player",
    Chips :  145
}

let messageel = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ": $" + player.Chips

function getRandomCard(){
    let randomNumber1 = Math.floor( Math.random() * 13 ) + 1

    if(randomNumber1 === 1 )
    {
        return 11
    }
    else if(randomNumber1 > 10 )
    {
        return 10
    }
    else
    return randomNumber1
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let sencodCard = getRandomCard()
    cards = [firstCard + sencodCard]
    renderGame()
}


function renderGame() {
    sumEl.textContent = "Sum : " +  sum;
    cardEl.textContent = "Cards : "
    for(let i = 0 ; i<cards.length ;i++)
    {
        cardEl.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card ?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageel.textContent = message
}



function newCard(){
    if(isAlive === true && hasBlackJack === false ){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}

