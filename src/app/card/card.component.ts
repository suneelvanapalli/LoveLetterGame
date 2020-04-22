import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Input() cardIndex: number;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDiscardClick: EventEmitter<number> = new EventEmitter<number>();
  constructor(private gameService: GameService) {}

  ngOnInit() {}

  discard() {
    this.onDiscardClick.emit(this.cardIndex);
  }
}
