import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleCartService } from '../services/article-cart.service';
import { Article } from '../articles-list/Article';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartList$: Observable<Article[]>;
  total$: Observable<number>;

  constructor (private cart: ArticleCartService){
    this.cartList$ = cart.cartList.asObservable();
    this.total$ = cart.total.asObservable();
  }

  ngOnInit(): void {
  }
}
