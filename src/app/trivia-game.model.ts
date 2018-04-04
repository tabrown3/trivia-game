import {Subject} from 'rxjs/Subject';

export class TriviaGame {

  lives = 3;
  correctAnswerCount = 0;
  readonly gameOver$ = new Subject();
  readonly questions$ = new Subject<TriviaQuestion>();

  private readonly questionsIterator: IterableIterator<TriviaQuestion>;
  currentQuestion: TriviaQuestion;

  constructor(private questions: TriviaQuestion[]) {

    this.questionsIterator = questions[Symbol.iterator]();
    this.currentQuestion = this.questionsIterator.next().value;
  }

  submitAnswer(answer: string) {

    if (answer === this.currentQuestion.correct_answer) {

      this.correctAnswerCount++;
    }
    else {

      this.lives--;
    }

    if (this.lives === 0) {

      this.gameOver$.next();
    }
    else {

      this.currentQuestion = this.questionsIterator.next().value;
      this.questions$.next(this.currentQuestion);
    }
  }
}
