import { Injectable } from '@angular/core';
import { DashboardComponent } from '../models/dashbord-component';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  count = 0;
  constructor() { }

  getCards(narrowDevice: boolean) : Card[] {
      if (narrowDevice) {
      return [
        { title: 'Photo Narrow', cols: 1, rows: 1, type: DashboardComponent.photo },
        {
          title: 'Edinburgh forecast',
          cols: 1,
          rows: 1,
          type: DashboardComponent.weather,
          options: { location: { city: 'Edinburgh', country: 'uk' } }
        },
        { title: 'Card 3', cols: 1, rows: 1, type: DashboardComponent.work },
        {
          title: 'Glasgow forecast',
          cols: 1,
          rows: 1,
          type: DashboardComponent.weather,
          options: { location: { city: 'Glasgow', country: 'uk' } }
        }
      ];
    }

    return [
      { title: 'Photo wide', cols: 2, rows: 1, type: DashboardComponent.photo },
      {
        title: 'Edinburgh forecast',
        cols: 1,
        rows: 1,
        type: DashboardComponent.weather,
        options: { location: { city: 'Edinburgh', country: 'uk' } }
      },
      { title: 'Card 3', cols: 1, rows: 2, type: DashboardComponent.work },
      {
        title: 'Glasgow forecast',
        cols: 1,
        rows: 1,
        type: DashboardComponent.weather,
        options: { location: { city: 'Glasgow', country: 'uk' } }
      }
    ];

  }
}
