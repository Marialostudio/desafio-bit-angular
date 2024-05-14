import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(/*private http:HttpClient*/) { }

  /*obtenerDatos () {
    const url = 'https://api.api-ninjas.com/v1/car';
    const key = 'e+3P473CVoeAtZt1QAbVcA==7e49cDIda0wz2PCr';
    const header = new HttpHeaders({'x-api-key': key});
    return this.http.get(url, {headers: header});
  }*/

  API_URL: string = "https://thronesapi.com/api/v2/Characters";

  httpClient = inject (HttpClient);

  obtenerDatos() {
    return this.httpClient.get(this.API_URL);
  }

}
