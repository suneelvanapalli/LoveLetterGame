import { Card, CardType, Game, Player } from './game.model';
import { Injectable } from '@angular/core';

export class GameService {
  game: Game = new Game();
  constructor() {}

  startGame() {
    this.game.stackShuffle();
    this.game.players.forEach((element: Player, index: number) => {
      this.takeCardFromDeck(index);
    });
  }

  takeCardFromDeck(id: number) {
    // const index = Math.floor(Math.random() * this.game.deck.length);
    const index = 0;
    this.game.players[id].cards.push(this.game.deck[index]);
    this.game.deck.splice(index, 1);
  }
}
