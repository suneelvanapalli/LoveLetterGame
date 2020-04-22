import { Card, CardType, Game, Player } from "./game.model";
import { Injectable } from "@angular/core";

export class GameService {
  game: Game = new Game();
  constructor() {}

  startGame() {
    this.game.stackShuffle();
    this.game.players.forEach((element: Player, index: number) => {
      this.takeCardFromDeck(index);
      if (index === 0) {
        element.isYourTurn = true;
        element.receivedCardFromDeck = false;
        element.areYouCurrentPlayer = true; // this data should be rerieved from current context
      }
    });
  }

  takeCardFromDeck(id: number) {
    // const index = Math.floor(Math.random() * this.game.deck.length);
    const index = 0;
    this.game.players[id].cards.push(this.game.deck[index]);
    this.game.players[id].receivedCardFromDeck = true;
    this.game.deck.splice(index, 1);
  }

  discard(pIndex: number, cardId: number) {
    const discardedCard = this.game.players[pIndex].cards[cardId];

    if (discardedCard.name === "Handmaid") {
      this.game.players[pIndex].isProtectModeOn = true;
    }

    this.game.discards.push(this.game.players[pIndex].cards[cardId]);
    this.game.players[pIndex].cards.splice(cardId);
    this.game.discardModeOn = true;
  }

  executeGuardOperation(
    pIndex: number,
    challengePIndex: number,
    guess: string
  ) {
    // validate guess and log the result
    this.postExecuteCardOperation(pIndex);
  }

  postExecuteCardOperation(pIndex: number) {
    const playerCount = this.game.players.length;
    const nextPlayerIndex = (pIndex % playerCount) + 1;

    this.game.players[pIndex].isYourTurn = false;
    this.game.players[pIndex].receivedCardFromDeck = false;

    // reset values for next player before giving turn to next player
    this.game.players[nextPlayerIndex].isYourTurn = true;
    this.game.players[nextPlayerIndex].isProtectModeOn = false;
    this.game.players[nextPlayerIndex].receivedCardFromDeck = false;

    this.game.discardModeOn = false;

    // save state to the api
  }
}
