import { Component } from '@angular/core';
import {Api} from '../service/api';
import {BoardGame} from '../models/boardgame';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-roulette',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './roulette.html',
  styleUrl: './roulette.scss',
})
export class Roulette{

  boardgame: BoardGame | null = null;
  constructor(private api: Api) {}

  BgRandom() {
    const id = this.getRandomNumber(456510);
    this.api.getGamebyID(id).subscribe({
      next: (data) => this.boardgame = data as BoardGame,
      error: (err) => console.error('Erreur API :', err)
    })
    console.log(this.boardgame)
  }



  roulette(){

  }




  getRandomNumber(max:number): number {
    return Math.floor(Math.random() * max) + 1;
  }
}
