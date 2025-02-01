import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../../models/IProduct';

@Component({
  selector: 'app-add-product',
  standalone: false,
  
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
newName : string = "";
newDescription : string = "";
newPrice : string = "";
newImage : string = "";

@Output() ProductAdded = new EventEmitter<IProduct>();
onProductAdded(){
  this.ProductAdded.emit({
    name: this.newName,
    desctiption: this.newDescription,
    price: this.newPrice,
    image: this.newImage
  });
}

}
