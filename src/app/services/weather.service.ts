import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'https://api.openweathermap.org/data/2.5/';
  key = '324906282ee9dbb3ffd24dcb55399f34';
  city = 'Sleman';

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(`${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`);
  }
}
