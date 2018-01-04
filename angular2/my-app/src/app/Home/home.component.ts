import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: '<div (click)="myFunction()">This is a {{title}}</div>'
})
export class HomeComponent {
  title = 'Home';

  myFunction() {
    alert('helo');
  }
}
