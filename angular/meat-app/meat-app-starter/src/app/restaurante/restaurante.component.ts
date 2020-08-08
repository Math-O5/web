import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model'
import { RestauranteService } from './restaurante.service'

@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html',
})
export class RestauranteComponent implements OnInit {

  restaurants: Restaurant[] = [{
    id: "bread-bakery",
    name: "Bread & Bakery",
    category: "Bakery",
    deliveryEstimate: "25m",
    rating: 4.9,
    imagePath: "a",
  }];

  constructor(private restauranteService: RestauranteService) {}

  ngOnInit() {
    this.restauranteService
      .restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

}
