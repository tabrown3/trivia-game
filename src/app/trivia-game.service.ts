import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';

import {TriviaGame} from './trivia-game.model';

@Injectable()
export class TriviaGameService {

  readonly TRIVIA_CATEGORIES_URL = 'https://opentdb.com/api_category.php';
  readonly TRIVIA_QUESTIONS_URL = 'https://opentdb.com/api.php';

  readonly PARAM_AMOUNT = 'amount';
  readonly PARAM_CATEGORY = 'category';
  readonly PARAM_DIFFICULTY = 'difficulty';
  readonly  PARAM_TYPE = 'type';

  currentGame: TriviaGame;

  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) {

  }

  startNewGame(categoryId: number, difficulty: string) {

    this.getQuestions(categoryId, difficulty).subscribe((res) => {

      this.currentGame = new TriviaGame(res);
      this.router.navigate(['/question'], {relativeTo: this.route});
    });
  }

  getCategories(): Observable<TriviaCategory[]> {

    return this.httpClient.get(this.TRIVIA_CATEGORIES_URL).pipe(map((res: TriviaCategoryResponse) => res.trivia_categories));
  }

  getQuestions(categoryId?: number, difficulty?: string): Observable<TriviaQuestion[]> {

    const type = 'multiple'; // only want multiple choice for v.1
    const amount = 50;

    const params = new HttpParams();
    params.set(this.PARAM_TYPE, type);
    params.set(this.PARAM_AMOUNT, amount.toString());

    if (categoryId !== undefined) {
      params.set(this.PARAM_CATEGORY, categoryId.toString());
    }

    if (difficulty !== undefined) {
      params.set(this.PARAM_DIFFICULTY, difficulty);
    }

    return this.httpClient.get(this.TRIVIA_QUESTIONS_URL, {
      params: params
    }).pipe(map((res: TriviaQuestionsResponse) => res.results));
  }
}
