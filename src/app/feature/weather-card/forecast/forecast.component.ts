import {ChangeDetectionStrategy, Component} from '@angular/core';
import {WeatherApiService} from "../../../shared/weather-api.service";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastComponent {
  constructor(public weather: WeatherApiService) {
  }
}
