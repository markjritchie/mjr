import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '../models/location';
import { Weather } from '../models/weather';

@Component({
  selector: 'mjr-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnChanges {
  @Input()
  location?: Location;

  weather?: Weather;
  constructor(private service: WeatherService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
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

  mapWeather(weatherDto:any): Weather {
    return {
      city: { name: weatherDto.city.name, population: weatherDto.city.population },
      days: weatherDto.list.map((item: any) => ({
        time: item.dt,
        temperature: item.main.temp, description: item.weather[0].description, icon: item.weather[0].icon
      }))
    };
  }

}
