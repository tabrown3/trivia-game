import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {TriviaGameService} from './trivia-game.service';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { QuestionScreenComponent } from './question-screen/question-screen.component';
import { GameOverComponent } from './game-over/game-over.component';
import { LifeMeterComponent } from './question-screen/life-meter/life-meter.component';

const routes: Routes = [
  {path: 'question', component: QuestionScreenComponent},
  {path: 'game-over', component: GameOverComponent},
  {path: '**', component: StartScreenComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    QuestionScreenComponent,
    GameOverComponent,
    LifeMeterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [TriviaGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
