import { Component, Input, OnInit, OnDestroy, HostBinding } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { interval } from 'rxjs/observable/interval';
import { timer } from 'rxjs/observable/timer';
import {switchMap, map} from 'rxjs/operators';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit, OnDestroy {
  @Input() image: string;

  blink$: Observable<any> = interval(this.rndDelay()).pipe(
    map(iterval => Boolean(Math.round(Math.random())))
  );

  public blink: boolean;
  private subscription: Subscription;

  constructor() {}

  ngOnInit() {
    this.blink = true;
    this.blink$.subscribe(blink => {
      this.blink = !this.blink;
    });
  }

  rndDelay (): number {
    return Math.random() * 10000;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
