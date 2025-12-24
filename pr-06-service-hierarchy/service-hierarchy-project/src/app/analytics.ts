
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Analytics {

  logEvent(event: string): void {
    console.log('Analytics event:', event);
  }
}

