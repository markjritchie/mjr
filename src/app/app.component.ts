import { Component, SimpleChange } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Location } from './models/location';
import { MatSelectChange } from '@angular/material';

export interface CityValue {
  value: Location;
  text: string;
}

export interface Countries {
  disabled?: boolean;
  name: string;
  cities: CityValue[];
}

@Component({
  selector: 'mjr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `Mark's very underwhelming weather site.`;
  location: Location;
  cityControl = new FormControl();
  countries: Countries[] = [
    {
      name: 'UK',
      cities: [
        { value: { city: 'Edinburgh', country: 'uk' }, text: 'Edinburgh' },
        { value: { city: 'Glasgow', country: 'uk' }, text: 'Glasgow' },
        { value: { city: 'East Kilbride', country: 'uk' }, text: 'East Kilbride' }
      ]
    },
    {
      name: 'US',
      cities: [
        { value: { city: 'Los Angeles', country: 'us'}, text: 'LA' },
        { value: { city: 'New York', country: 'us'}, text: 'New York' },
        { value: { city: 'Miami', country: 'us'}, text: 'Miami' }
      ]
    },
    {
      name: 'Ooops',
      cities: [
        { value: { city: 'Somewhere', country: 'Nowhere'}, text: 'Lets have an error' },
      ]
    }
  ];

  onChange(event: MatSelectChange) {
    this.location = event.value;
  }
}
