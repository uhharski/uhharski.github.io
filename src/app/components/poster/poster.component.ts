import {Component, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
  animations: [
    trigger('preview',[
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('3s cubic-bezier(0.35, 0, 0.25, 1)')
      ]),
    ])
  ]
})
export class PosterComponent implements OnInit {
  @Input('') imageUrl: string;
  image: string
  constructor() { }
  ngOnInit() {
    this.image = `assets/images/movie-covers/${this.imageUrl}`;
  }

}
