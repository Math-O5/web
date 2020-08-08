import { MenuTem } from "../menu-tem/menu-tem.model";

export class CartItem {
    constructor(public menuItem: MenuTem,
        public quantidade : number = 1) {

        }

    value(): number {
        return this.menuItem.price * this.quantidade;
    }
}