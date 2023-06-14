// Code your solutions in this file
function writeCards(listOfNames, typeOfGift) {
    const thankYouCards = []
    for(let index = 0; index <listOfNames.length; index++){
        thankYouCards.push(`Thank you, ${listOfNames[index]}, for the wonderful ${typeOfGift} gift!`)
        
        console.log(thankYouCards)
    }
    return thankYouCards
}

// console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))

function countDown(startingNumber) {
    for(let index = startingNumber; index >= 0; index--){
        console.log(index)
    }
}

// countDown(10)