import {Subject} from 'rxjs/Subject';

export class TriviaGame {

  lives = 3;
  correctAnswers = 0;
  gameOver$ = new Subject();

  private readonly questionsIterator: IterableIterator<TriviaQuestion>;
  private currentQuestion: TriviaQuestion;

  constructor(private questions: TriviaQuestion[]) {

    this.questionsIterator = questions[Symbol.iterator]();
    this.currentQuestion = this.questionsIterator.next().value;
  }

  submitAnswer(answer: string) {

    if (answer === this.currentQuestion.correct_answer) {

      this.correctAnswers++;
    }
    else {

      this.lives--;
    }

    if (this.lives === 0) {

      this.gameOver$.next();
    }
    else {

      this.currentQuestion = this.questionsIterator.next().value;
    }
  }
}
