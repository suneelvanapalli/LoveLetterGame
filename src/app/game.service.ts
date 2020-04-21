import { Card, CardType, Game, Player } from './game.model';
import { Injectable } from '@angular/core';

export class GameService {
  game: Game;
  constructor() {
    this.game = new Game();
    this.game.players = [
      new Player('player1', 'Player 1'),
      new Player('player2', 'Player 2'),
      new Player('player3', 'Player 3'),
      new Player('player4', 'Player 4'),
    ];
  }

  startGame() {
    this.game.stackShuffle();
    this.game.players.forEach((element) => {
      this.takeCardFromDeck(element);
    });
  }

  takeCardFromDeck(player: Player) {
    const index = Math.floor(Math.random() * this.game.deck.length);
    player.cards.push(this.game.deck[index]);
    this.game.deck.splice(index, 1);
  }
}
