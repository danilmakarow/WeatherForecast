import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BehaviorSubject} from "rxjs";
import {WeatherApiService} from "../../../shared/weather-api.service";
import {City} from "../../../shared/interfaces/api.interface";

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitySelectorComponent {
  public filteredCities = new BehaviorSubject<string[]>([])

  public currForm = new FormGroup({
    'city': new FormControl('', [
    ]),
  });

  constructor(
    public weather: WeatherApiService
  ) {
  }
}
