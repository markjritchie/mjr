import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { MatSnackBar } from '@angular/material';
import { Location } from '../models/location';

export interface Weather {
  city: { name: string, population: number };
  days: { time: any, temperature: number, description: string, icon: string }[];
}

@Component({
  selector: 'mjr-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnChanges {
  @Input()
  location: Location;

  weather: Weather;
  constructor(private service: WeatherService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.location && this.location.city && this.location.country) {
      this.service.getForcast(this.location).
        subscribe(weather => {
          this.weather = this.mapWeather(weather);
          console.log(weather);
        }
          , error => {
            this.snackBar.open(error, 'Problem getting the weather.');
            this.weather = undefined;
          });
    }
  }

  mapWeather(weatherDto): Weather {
    return {
      city: { name: weatherDto.city.name, population: weatherDto.city.population },
      days: weatherDto.list.map(item => ({
        time: item.dt,
        temperature: item.main.temp, description: item.weather[0].description, icon: item.weather[0].icon
      }))
    };
  }

}
