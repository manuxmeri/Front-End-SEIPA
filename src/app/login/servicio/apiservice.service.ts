import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  path = `${environment.API_URL}roles`;

  constructor(private http: HttpClient) { }

  getRoles(){
    return this.http.get(this.path);
  }
 
}



 