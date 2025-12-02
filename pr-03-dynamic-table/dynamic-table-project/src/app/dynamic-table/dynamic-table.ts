import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  standalone: false,
  templateUrl: './dynamic-table.html',
  styleUrl: './dynamic-table.css',
})
export class DynamicTable {
products = [
    { name: 'Ноутбук', category: 'Електроніка', price: 1500, stockCount: 12 },
    { name: 'Стілець', category: 'Меблі', price: 49, stockCount: 0 },
    { name: 'Кофе-машина', category: 'Побутова техніка', price: 220, stockCount: 3 },
    { name: 'Навушники', category: 'Електроніка', price: 35, stockCount: 25 },
    { name: 'Телевізор', category: 'Електроніка', price: 499, stockCount: 0 }
  ];
}
