import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherCardComponent } from './feature/weather-card/weather-card.component';
import { CitySelectorComponent } from './feature/weather-card/city-selector/city-selector.component';
import { ForecastComponent } from './feature/weather-card/forecast/forecast.component';
import {HeaderComponent} from "./shared/header/header.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {WeatherApiService} from "./shared/weather-api.service";
import {HttpClientModule} from "@angular/common/http";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    CitySelectorComponent,
    ForecastComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDividerModule
  ],
  providers: [
    WeatherApiService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
