import { Injectable } from '@angular/core';
import { Score } from '../models/score';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

const domain = "https://localhost:7225";
@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor(public http: HttpClient) { }


  async getPublicScores(): Promise<Score[]> {

    let x = await lastValueFrom(this.http.get<Score[]>(domain + "/api/Scores/GetPublicScores"));
    console.log(x);
    return x;


  }






}
