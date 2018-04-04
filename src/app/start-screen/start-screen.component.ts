import { Component, OnInit } from '@angular/core';

import {TriviaGameService} from '../trivia-game.service';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent implements OnInit {

  triviaCategories: TriviaCategory[];
  difficulties = [
    'easy',
    'medium',
    'hard'
  ];
  selectedCategoryId: number;
  selectedDifficulty = 'easy';

  constructor(private triviaGameService: TriviaGameService) { }

  ngOnInit() {

    this.triviaGameService.getCategories().subscribe((categories) => {

      this.triviaCategories = categories;
      this.selectedCategoryId = this.triviaCategories[0].id;
    });
  }

  onStart() {

    this.triviaGameService.startNewGame(this.selectedCategoryId, this.selectedDifficulty);
  }
}
