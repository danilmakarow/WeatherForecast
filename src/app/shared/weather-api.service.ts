import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {City, WeatherData} from "./interfaces/api.interface";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  public searchResult$ = new BehaviorSubject<City[] | null>(null);
  public selectedCityWeather$ = new BehaviorSubject<WeatherData | null>(null)

  private api: string = 'f0fe65c3e86123b2ec836d117ecac9f8';
  private searchTimeout: any;

  constructor(private http: HttpClient) {
    // Load Kyiv's data at start of application
    this.http.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=Kyiv,UA&units=metric&appid=${this.api}`)
      .subscribe(
        cityWeather => this.selectedCityWeather$.next(cityWeather)
      )
  }

  public getCities(cityPrompt: string): void {
    clearTimeout(this.searchTimeout);

    this.searchTimeout = setTimeout(() => {
      this.http.get<City[]>(`https://api.openweathermap.org/geo/1.0/direct?q=${cityPrompt}&limit=5&appid=${this.api}`)
        .subscribe(
          cities => this.searchResult$.next(cities)
        )},
    500
    )
  }

  public getWeather(city: City): void {
    this.http.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${city.name},${city.country}&units=metric&appid=${this.api}`)
      .subscribe(
        cityWeather => this.selectedCityWeather$.next(cityWeather)
      )
   }
}
