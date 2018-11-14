import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { interval } from 'rxjs/observable/interval';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-background',
  templateUrl: './bg.component.html',
  styleUrls: ['./bg.component.scss']
})
export class BackgroundComponent implements OnInit, OnDestroy {
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
