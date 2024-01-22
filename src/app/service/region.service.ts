import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  path = `${environment.API_URL}regiones`;
  constructor(private http: HttpClient) {  }

    getRegiones(){
      return this.http.get('http://localhost:8000/api/regiones');
    }
 
}
