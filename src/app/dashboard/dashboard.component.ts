import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'mjr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards :any = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return this.dashboardService.getCards(matches);
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private dashboardService: DashboardService) {}
}
