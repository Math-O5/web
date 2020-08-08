import { Component, OnInit } from '@angular/core';
import { MenuTem } from '../menu-tem/menu-tem.model';
import { Observable } from 'rxjs/Observable';
import { RestauranteService } from 'app/restaurante/restaurante.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuTem[]>

  constructor(private restauranteService: RestauranteService, 
    private route: ActivatedRoute, private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.menu = this.restauranteService
      .menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(item: MenuTem) {
    this.shoppingCartService.addItem(item);
  };
}
