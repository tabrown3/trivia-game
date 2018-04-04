import { Component, OnInit } from '@angular/core';
import {TriviaGameService} from '../trivia-game.service';

@Component({
  selector: 'app-question-screen',
  templateUrl: './question-screen.component.html',
  styleUrls: ['./question-screen.component.css']
})
export class QuestionScreenComponent implements OnInit {

  question: TriviaQuestion;
  chosenAnswer = '';

  constructor(private triviaGameService: TriviaGameService) { }

  ngOnInit() {

    this.question = this.triviaGameService.currentGame.currentQuestion;

    this.triviaGameService.currentGame.questions$.subscribe(question => this.question = question);
  }

  chooseAnswer(answer: string) {

    this.chosenAnswer = answer;
  }

  onSubmit() {

    this.triviaGameService.currentGame.submitAnswer(this.chosenAnswer);
    this.chosenAnswer = '';
  }

}
