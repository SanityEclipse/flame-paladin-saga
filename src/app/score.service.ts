import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Score } from './Score';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class ScoreService {

  constructor(private http: Http) { }

  getScores(): Promise<Score[]> {
     return this.http.get('/highscores')
                .toPromise()
                .then(response => response.json() as Score[])
                .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }

}
