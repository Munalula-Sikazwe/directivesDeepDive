import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 odd = [1,3,5];
 even = [2,4,6];
 value = 30;
  onlyOdd = false;
}
