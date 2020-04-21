import { Component, OnInit } from "@angular/core";
import { GameService } from "./game.service";
import { Player, Card, Game } from "./game.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [GameService],
})
export class AppComponent implements OnInit {
  title = "LoveLetterGame";
  game: Game;
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.game = this.gameService.game;
    this.gameService.startGame();
  }

  receiveCardFromDeck(id: number) {
    this.gameService.takeCardFromDeck(id);
  }

  discardCard() {}
}
