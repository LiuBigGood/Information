function age(params:string) {
    return params + 1
}
let a  = function (x:string, y:string) {
    return x + y;
}
console.log(a('1','2'));


// this
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        console.log(this);
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return function() {
            console.log(this);
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker().bind(deck);
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);