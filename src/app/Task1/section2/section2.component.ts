import { Component } from '@angular/core';

@Component({
  selector: 'app-section2',
  standalone: false,
  
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.scss'
})
export class Section2Component {
  showSecret : boolean = false;
  setDetails: number[] = [];
  incrementNumber: number = 1;
  toggleDetails(){
    this.showSecret = !this.showSecret
    this.setDetails.push(this.incrementNumber);
    this.incrementNumber++;
  }
giveStyle={
    'background-color':   'blue',
  }
  giveClasses={
    "text-white":true,
  }
}
