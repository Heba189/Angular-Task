import { Component } from '@angular/core';

@Component({
  selector: 'app-section1',
  standalone: false,
  
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.scss'
})
export class Section1Component {
 UserName :string ="Test userName";

}
