import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

export const Components = {
  photo: 1,
  weather: 2,
  work: 3
};

@Component({
  selector: 'mjr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Photo', cols: 1, rows: 1, type: Components.photo },
          {
            title: 'Edinburgh forecast',
            cols: 1,
            rows: 1,
            type: Components.weather,
            options: { location: { city: 'Edinburgh', country: 'uk' } }
          },
          { title: 'Card 3', cols: 1, rows: 1, type: Components.work },
          {
            title: 'Glasgow forecast',
            cols: 1,
            rows: 1,
            type: Components.weather,
            options: { location: { city: 'Glasgow', country: 'uk' } }
          }
        ];
      }

      return [
        { title: 'Photo', cols: 2, rows: 1, type: Components.photo },
        {
          title: 'Edinburgh forecast',
          cols: 1,
          rows: 1,
          type: Components.weather,
          options: { location: { city: 'Edinburgh', country: 'uk' } }
        },
        { title: 'Card 3', cols: 1, rows: 2, type: Components.work },
        {
          title: 'Glasgow forecast',
          cols: 1,
          rows: 1,
          type: Components.weather,
          options: { location: { city: 'Glasgow', country: 'uk' } }
        }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
