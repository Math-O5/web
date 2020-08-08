import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { RestauranteService } from 'app/restaurante/restaurante.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private restaurantsService: RestauranteService,
              private route: ActivatedRoute) { }

  ngOnInit() {
      // restaurant/:id/review
      this.reviews = this.restaurantsService
      .reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
