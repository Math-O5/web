import { CartItem } from "./cart-item.model"
import { MenuTem } from "../menu-tem/menu-tem.model"

export class ShoppingCartService {
    items: CartItem[] = []

    clear() {
        this.items = [];
    }

    total() : number {
        return this.items   
            .map(item => item.value())
            .reduce((prev, value) => prev+value, 0);
    }

    addItem(item:MenuTem) {
        console.log("item: ", item);
        let foundItem = this.items.find((mItem => mItem.menuItem.id === item.id));
        console.log("found", foundItem);
        if(foundItem) {
            this.increaseQty(foundItem);
        } else {
            this.items.push(new CartItem(item));
        }
    }

    increaseQty(item: CartItem) {
        item.quantidade = item.quantidade + 1;
    }

    decreaseQty(item: CartItem) {
        item.quantidade = item.quantidade - 1;
        if(!item.quantidade) {
            this.removeItem(item);
        }
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}