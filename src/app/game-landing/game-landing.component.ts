import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService } from '../score.service';
import { Score } from '../Score';

@Component({
  selector: 'app-game-landing',
  template: `

  <div style="float:left; margin-left:10%">
    <h1 style="color:white">Top 5 Scores</h1>
      <div *ngFor="let score of scores">
        <ul>
          <li style="color:white"> {{ score.name }} {{ score.score }} </li>
        </ul>
      </div>
      <p align="left">
        <a routerLink="/site-landing" class="btn btn-lg btn-danger" role="button" style="margin-top: 85%">Return to Landing</a>
      </p>
    </div>
    
  <app-game-canvas></app-game-canvas>

  `,
  styleUrls: ['./game-landing.component.css']
})

export class GameLandingComponent implements OnInit {

  scores: Score[] = [];

  constructor(
    private ScoreService: ScoreService) {}

  ngOnInit() {
    this.ScoreService.getScores()
    .then(scores => this.scores = scores.slice(1,6))
      console.log(this.scores);

  }

}
