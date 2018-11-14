import {Component, Input, OnInit} from '@angular/core';
import {GenreType} from '../../model/movie.model';

interface StarProps {
  isFilled: boolean;
  isHalfFilled?: boolean | undefined;
}

export type IconType = 'star' | 'star_half' | 'star_border';
export const iconType = {
  star: 'star' as IconType,
  star_half: 'star_half' as IconType,
  star_border: 'star_border' as IconType,
};

@Component({
  selector: 'app-raiting',
  templateUrl: './raiting.component.html',
  styleUrls: ['./raiting.component.scss']
})
export class RaitingComponent implements OnInit {
  @Input() score: string;
  @Input() color = 'primary';
  internalValue: number;
  length: number;
  stars: StarProps[];
  constructor() { }

  ngOnInit() {
    this.length = 5;
    this.internalValue = Number(this.score) / 2;
    this.stars = this.createRange(Number(this.length)).map(i => this.createProps(i));
  }

  createProps (i: number): StarProps {
    const props: StarProps = {
      isFilled: Math.floor(this.internalValue) > i,
    };
    props.isHalfFilled = !props.isFilled && (this.internalValue - i) % 1 > 0;
    return props;
  }

  getIcon(item: StarProps) {
    if (item.isFilled) {
      return iconType.star;
    }
    return (item.isHalfFilled) ? iconType.star_half : iconType.star_border;
  }

  private createRange (length: number): number[] {
    return Array.from({ length }, (v, k) => k);
  }
}
