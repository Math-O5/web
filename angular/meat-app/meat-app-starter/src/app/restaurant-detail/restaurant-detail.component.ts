import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurante/restaurant/restaurant.model';
import { RestauranteService } from 'app/restaurante/restaurante.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
})
export class RestaurantDetailComponent implements OnInit {

  restaurant : Restaurant;
  //ActiveRoute forcene os parametros da rota
  constructor(private restaurantsService: RestauranteService, private route: ActivatedRoute) { }

  ngOnInit() {
    // snapshot tem os parametros atuais da rota
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant);
  }
}
