import { Component } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  imageUrl: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tiles: Tile[] = [
    { cols: 1, rows: 2, imageUrl: 'assets/jeff.webp' },
    { cols: 1, rows: 2, imageUrl: 'assets/marissa.jpg' },
    { cols: 2, rows: 4, imageUrl: 'assets/mark.jpg' },
    { cols: 2, rows: 2, imageUrl: 'assets/satya.jpg' },
    { cols: 2, rows: 2, imageUrl: 'assets/sundhar.webp' },
    { cols: 2, rows: 2, imageUrl: 'assets/tim.jpg' },
  ];
}
