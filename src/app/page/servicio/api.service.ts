import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { unidad } from '../admin/interfaces/unidad';
import { Observable } from 'rxjs';
import { Oficina } from '../admin/interfaces/Oficina';
import { oficinaMo } from '../admin/interfaces/oficinaMo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  path = `${environment.API_URL}unidadeconomica_pa`;

  constructor(private http: HttpClient) { }

  getUni(){
    return this.http.get(this.path);
  }

  agregar(uni: unidad): Observable<unidad>{
    return this.http.post<unidad>(`${this.path}`, uni)
  }

  getId(id: any): Observable<any>{
    return this.http.get<any>(this.path+'/'+id);  
  }

  eliminar(id:any): Observable<any>{
    return this.http.delete<any>(`${this.path}/${id}`);
  }

  //OFICINA
  getOfi(){
    return this.http.get('http://siipo.test/api/oficinas');
  }
  getIdOfi(id: any): Observable<any>{
    let direccion = "http://siipo.test/api/oficinas/"+id;
    return this.http.get<any>(direccion);
  }
  
  agreOfi(ofi: Oficina):Observable<Oficina>{
    let direccion = "http://siipo.test/api/oficinas";
    return this.http.post<Oficina>(direccion, ofi)
  }

  delete(id:any):Observable<any>{
    let direccion = "http://siipo.test/api/oficinas/"+ id;
    return this.http.delete<any>(direccion);
  }
 editOfi(id: any ,put:  Oficina):Observable<Oficina>{
    let direccion = "http://siipo.test/api/oficinas/"+ id;
    return this.http.put<Oficina>(direccion, put)
  }
  
}


