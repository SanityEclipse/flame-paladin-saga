import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService } from '../score.service';
import { Score } from '../Score';

@Component({
  selector: 'app-game-landing',
  template: `

  <div style="float:left; margin-left:10%">
    <h2>Top 5 Scores</h2>
      <div *ngFor="let score of scores">
        <ul>
          <li> {{ score.name }}: {{ score.score }} </li>
        </ul>

      </div>
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
