import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'products';
  name ="Rishin";
  amount:number=12654.23;
  demo()
  {
    alert("I am a function!!!");
  }
}
