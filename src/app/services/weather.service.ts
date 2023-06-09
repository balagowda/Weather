import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  APIkey = environment.API;
  URL = environment.URLAPI;

  constructor(private http:HttpClient) { }

    getWeatherData(city: string): Observable<any>{

      return this.http.get(this.URL + city + '&APPID=' + this.APIkey);
    }
}

