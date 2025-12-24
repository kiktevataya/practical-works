import { Injectable } from '@angular/core';
import { Data } from './data';
import { Analytics } from './analytics';

@Injectable({
  providedIn: 'root'
})
export class AppLogic {

  constructor(
    private data: Data,
    private analytics: Analytics
  ) {}

  getDataAndLog(): string[] {
    const data = this.data.getData();
    this.analytics.logEvent('Дані були отримані');
    return data;
  }
}
