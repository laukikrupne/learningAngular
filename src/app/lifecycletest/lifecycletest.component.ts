import { TypeofExpr } from '@angular/compiler';
import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from '../utilities/rating/rating.component';

@Component({
  selector: 'app-lifecycletest',
  templateUrl: './lifecycletest.component.html',
  styleUrls: ['./lifecycletest.component.css']
})
export class LifecycletestComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {
  
  timer: ReturnType<typeof setInterval>;

  @ViewChild(RatingComponent)
  rating: RatingComponent
  
  // Is not a life cycle event
  constructor() { }
  ngAfterViewInit(): void {
    console.log("On After View init");
    console.log(this.rating);
  }
  ngDoCheck(): void {
    console.log("On DoCheck");
  }
  ngOnDestroy(): void {
    console.log("On Destroy");
    clearInterval(this.timer);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log("On Change");
  }

  ngOnInit(): void {
    console.log("On Init");
    console.log(this.rating);
    this.timer = setInterval(() => console.log(new Date()), 1000);
  }

  @Input()
  title: string;

}
