import { Component } from '@angular/core';
import { IProduct } from './models/IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  products: IProduct[] = [
    { name: 'Laptop', price: '1000$', desctiption: 'High-end laptop', image: 'https://via.placeholder.com/150' },
    { name: 'Phone', price: '500$', desctiption: 'Latest smartphone', image: 'https://via.placeholder.com/150' }
  ];
track: any;
  onProductAdded(product: IProduct) {
    this.products.push(product);
  }
}
