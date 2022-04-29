import {Injectable} from "@angular/core";
import {ItemsVenda} from "./venda.model";
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {

    items: ItemsVenda [] = [];
    cartChanged = new Subject<ItemsVenda[]>();

    constructor() { }

    getCartItems() {
        return this.items.slice();
    }

    deleteCartItem(index) {
        this.items.splice(index, 1);
        this.cartChanged.next(this.items.slice());
    }

    addCartItems(item: ItemsVenda) {
        this.items.push(item);
        this.cartChanged.next(this.items.slice());
    }
}
