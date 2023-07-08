const cards = ["Guadalupe", "Ollie", "Aki"];
const eventName = ["suprise"];
function writeCards(cards, event) {
    let messagesArray = [];
    for (let i = 0; i < cards.length; i++) {
      messagesArray.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
    }
    return messagesArray;
  }

  function countDown(number){
    while (number >= 0) {
        console.log(number);
        number--;
    }
  }