import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html'
})
export class App {

  searchText = '';

  items = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Banana', category: 'Fruit' },
    { name: 'Carrot', category: 'Vegetable' },
    { name: 'Potato', category: 'Vegetable' }
  ];

  addItem() {
    this.items.push({ name: 'Orange', category: 'Fruit' });
  }
}
