import { Component, OnInit, Input } from '@angular/core';
import { Player, Card } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;
  @Input() playerIndex: number;
  @Input() yourTurn: boolean;
  @Input() areYouTheCurrenPlayer: boolean;
  constructor(private gameService: GameService) {}

  ngOnInit() {}

  receiveCardFromDeck(id: number) {
    this.gameService.takeCardFromDeck(id);
  }

  onDiscardClick(cardIndex: number) {
    this.gameService.discard(this.playerIndex, cardIndex);
  }
}
