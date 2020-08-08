import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  rate: number = 0;
  rates: number[] = [1,2,3,4,5];
  previousRate : number;

  @Output() rated =new EventEmitter<number>();

 constructor(private http: Http, private router: Router) { }

  ngOnInit() {
  }

  rating(rate: number) {
    this.rate = rate;
    this.previousRate = rate;   
    this.rated.emit(this.rate);
  }

  setTempRate(rate: number) {
    this.previousRate = this.rate;
    this.rate = rate;
  }

  clearTempRate() {
    this.rate = this.previousRate;
  }

  // submit() {
  //   this.http.post();

  //   this.router.navigate(['/restaurants']);
  // }
}
