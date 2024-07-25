import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrl: './vegetables.component.css'
})
export class VegetablesComponent {
products=[
{
  name:"badhakopi",
  price:60,
  stock:35
},
{
  name:"saak",
  price:10,
  stock:250
},
{
  name:"aloo",
  price:90,
  stock:120
},
{
  name:"begun",
  price:120,
  stock:25
},
];
}
