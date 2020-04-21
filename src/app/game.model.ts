export class Card {
  constructor(public id: string, public name: string, public type: CardType) {}
}

export enum CardType {
  Guard = 1,
  Priest = 2,
  Baron = 3,
  Handmaid = 4,
  Prince = 5,
  King = 6,
  Countess = 8,
  Princess = 9,
}

export class Player {
  constructor(public id: string, public name: string) {
    this.cards = [];
    this.isDead = false;
  }
  // tslint:disable-next-line:no-inferrable-types
  isDead: boolean = false;
  cards: Card[];
}

export class Game {
  id: string;
  currentPlayer = 2;
  players: Player[] = [
    new Player('player1', 'Player 1'),
    new Player('player2', 'Player 2'),
    new Player('player3', 'Player 3'),
    new Player('player4', 'Player 4'),
  ];
  // tslint:disable-next-line:no-inferrable-types
  currentTurn: number = 0;
  deck: Card[] = [
    new Card('guard1', 'Guard', CardType.Guard),
    new Card('guard2', 'Guard', CardType.Guard),
    new Card('guard3', 'Guard', CardType.Guard),
    new Card('guard4', 'Guard', CardType.Guard),
    new Card('guard5', 'Guard', CardType.Guard),
    new Card('priest1', 'Priest', CardType.Priest),
    new Card('priest2', 'Priest', CardType.Priest),
    new Card('baron1', 'Baron', CardType.Baron),
    new Card('baron2', 'Baron', CardType.Baron),
    new Card('handmaid1', 'Handmaid', CardType.Handmaid),
    new Card('handmaid1', 'Handmaid', CardType.Guard),
    new Card('prince1', 'Prince', CardType.Prince),
    new Card('prince2', 'Prince', CardType.Prince),
    new Card('king1', 'King', CardType.King),
    new Card('countess1', 'Countess', CardType.Countess),
    new Card('princess1', 'Princess', CardType.Princess),
  ];

  stackShuffle() {
    let count = this.deck.length;
    while (count) {
      this.deck.push(this.deck.splice(Math.floor(Math.random() * count), 1)[0]);
      count -= 1;
    }
  }
}
