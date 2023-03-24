function age(params) {
    return params + 1;
}
var a = function (x, y) {
    return x + y;
};
console.log(a('1', '2'));
// this
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        console.log(this);
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return function () {
            console.log(this);
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker().bind(deck);
var pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
