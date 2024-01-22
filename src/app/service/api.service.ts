import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Roles } from '../interfaces/roles';
import { Oficina } from '../interfaces/oficina';
import { Uniconomicafisica } from '../interfaces/uniconomicafisica';
import { ArtePesca } from '../interfaces/arte-pesca';
import { Especies } from '../interfaces/especies';
import { unidadMoral } from '../interfaces/unidad-moral';
import { Socios } from '../interfaces/socios';
import { Productos } from '../interfaces/productos';
import { Regiones } from '../interfaces/regiones';
import { Distritos } from '../interfaces/distritos';
import { Municipios } from '../interfaces/municipios';
import { Localidades } from '../interfaces/localidades';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  path = `${environment.API_URL}oficinas`;

path2 = `${environment.API_URL}unidades_economicas_pa_fisico`;
  constructor(private http: HttpClient) { }


  
  getRegiones(){
    return this.http.get('http://localhost:8000/api/regiones');
  }
  getMunicipios(){
    return this.http.get('http://localhost:8000/api/municipios');
  }
  
  getUnifisica(){
    return this.http.get('http://localhost:8000/api/unidades_economicas_pa_fisico');
  }

  showUnifisica(){
    return this.http.get('http://localhost:8000/api/unidades_economicas_pa_fisico');
  }
  getLoc(){
    return this.http.get('http://localhost:8000/api/localidades');
  }
  getLocalidades(){
    return this.http.get('http://localhost:8000/api/localidades');
  }

  getRoles(){
    return this.http.get('http://localhost:8000/api/roles');
  }
  getTelefonos(){
    return this.http.get('http://localhost:8000/api/telefonos_pa_fisico');
  }
  
  getDistritos(){
    return this.http.get('http://localhost:8000/api/distritos');
  }
  
  /*agregar(uni: unidad): Observable<unidad>{
    return this.http.post<unidad>(`${this.path}`, uni)
  }*/
//Arte_Pesca 
agreArt(pesca: ArtePesca):Observable<ArtePesca>{
  let direccion = "http://localhost:8000/api/artes_pesca";
  return this.http.post<ArtePesca>(direccion, pesca)
} 
getArt(){
  return this.http.get('http://localhost:8000/api/artes_pesca');
} 
deleteA(id:any): Observable<any>{
  return this.http.delete<any>("http://localhost:8000/api/artes_pesca" + '/'+ id);
}

getIdArte(id:any):Observable<ArtePesca>{
  return this.http.get<ArtePesca>("http://localhost:8000/api/artes_pesca" + '/'+ id);  
}

editArte(id: any , put:  ArtePesca):Observable<ArtePesca>{
  let direccion = "http://localhost:8000/api/artes_pesca" + "/"+ id;
  return this.http.put<ArtePesca>(direccion, put)
}

//Especies 
agreEsp(especie: Especies):Observable<Especies>{
  let direccion = "http://localhost:8000/api/especies";
  return this.http.post<Especies>(direccion, especie)
} 

delete(id:any): Observable<any>{
  return this.http.delete<any>("http://localhost:8000/api/especies" + '/'+ id);
}

getEspecie(){
  return this.http.get('http://localhost:8000/api/especies');
}

getIdEs(id:any):Observable<Especies>{
  return this.http.get<Especies>("http://localhost:8000/api/especies" + '/'+ id);  
}

editEsp(id: any ,put:  Especies):Observable<Especies>{
  let direccion = "http://localhost:8000/api/especies" + "/"+ id;
  return this.http.put<Especies>(direccion, put)
}

//OFICINAS
  getOfi(){
    return this.http.get('http://localhost:8000/api/oficinas');
  }
 
  agreOfi(ofi: Oficina): Observable<Oficina>{
    let direccion = "http://localhost:8000/api/oficinas";
    return this.http.post<Oficina>(direccion, ofi)
  }

  getId(id:any):Observable<Oficina>{
    return this.http.get<Oficina>("http://localhost:8000/api/oficinas" + '/'+ id);  
  }

 
  editOfi(id: any ,put:  Oficina):Observable<Oficina>{
    let direccion = "http://localhost:8000/api/oficinas" + "/"+ id;
    return this.http.put<Oficina>(direccion, put)
  }

  showUnifisicas(id: any ,put:  Oficina):Observable<Oficina>{
    let direccion = this.showUnifisicas+"/"+ id;
    return this.http.put<Oficina>(direccion, put)
  }

  eliminar(id:any): Observable<any>{
    return this.http.delete<any>(`${this.path}/${id}`);
  }


  agreUni(uni: Uniconomicafisica):Observable<Uniconomicafisica>{
    let direccion = "http://localhost:8000/api/unidades_economicas_pa_fisico";
    return this.http.post<Uniconomicafisica>(direccion, uni)
  }
  
  
  editUnidadF(id: any ,put:  Uniconomicafisica):Observable<Uniconomicafisica>{
    let direccion = this.path2+"/"+ id;
    return this.http.put<Uniconomicafisica>(direccion, put)
  }
  
  getIdUnidadF(id:any):Observable<Uniconomicafisica>{
    return this.http.get<Uniconomicafisica>(this.path2+'/'+id);  
  }

  agreMoral(moral: unidadMoral): Observable<unidadMoral> {
    let direccion = "http://localhost:8000/api/unidades_economicas_pa_moral";
    return this.http.post<unidadMoral>(direccion, moral)
  }

  getMoral() {
    return this.http.get('http://localhost:8000/api/unidades_economicas_pa_moral');
  }

  agreSocio(socio: Socios): Observable<Socios> {
    let direccion = "http://localhost:8000/api/socios_detalles_pa_moral";
    return this.http.post<Socios>(direccion, socio)
  }
  //PRODUCTOS
  agreProduc(producto: Productos): Observable<Productos> {
    let direccion = "http://localhost:8000/api/productos";
    return this.http.post<Productos>(direccion, producto)
  }
  getProd() {
    return this.http.get('http://localhost:8000/api/productos');
  }

  deleteP(id:any): Observable<any>{
    return this.http.delete<any>("http://localhost:8000/api/productos" + '/'+ id);
  }
  
  getIdPro(id:any):Observable<Productos>{
    return this.http.get<Productos>("http://localhost:8000/api/productos" + '/'+ id);  
  }
  
  editPro(id: any , put:  Productos):Observable<Productos>{
    let direccion = "http://localhost:8000/api/productos" + "/"+ id;
    return this.http.put<Productos>(direccion, put)
  }
  //REGION
  agrerRegion(region: Regiones): Observable<Regiones> {
    let direccion = "http://localhost:8000/api/regiones";
    return this.http.post<Regiones>(direccion, region)
  }
  deleteR(id:any): Observable<any>{
    return this.http.delete<any>("http://localhost:8000/api/regiones" + '/'+ id);
  }
  
  getIdRegion(id:any):Observable<Regiones>{
    return this.http.get<Regiones>("http://localhost:8000/api/regiones" + '/'+ id);  
  }
  
  editRegion(id: any , put:  Regiones):Observable<Regiones>{
    let direccion = "http://localhost:8000/api/regiones" + "/"+ id;
    return this.http.put<Regiones>(direccion, put)
  }
  //DISTRITO
  agreDistrito(distrito: Distritos):Observable<Distritos>{
    let direccion = "http://localhost:8000/api/distritos";
    return this.http.post<Distritos>(direccion, distrito)
  } 

  deleteDis(id:any): Observable<any>{
    return this.http.delete<any>("http://localhost:8000/api/distritos" + '/'+ id);
  }
  
  getIdDis(id:any):Observable<Distritos>{
    return this.http.get<Distritos>("http://localhost:8000/api/distritos" + '/'+ id);  
  }
  
  editDis(id: any , put:  Distritos):Observable<Distritos>{
    let direccion = "http://localhost:8000/api/distritos" + "/"+ id;
    return this.http.put<Distritos>(direccion, put)
  }
//MUNICIPIO
  agreMunicipio(municipio: Municipios):Observable<Municipios>{
    let direccion = "http://localhost:8000/api/municipios";
    return this.http.post<Municipios>(direccion, municipio)
  } 

  deleteM(id:any): Observable<any>{
    return this.http.delete<any>("http://localhost:8000/api/municipios" + '/'+ id);
  }
  
  getIdMuni(id:any):Observable<Municipios>{
    return this.http.get<Municipios>("http://localhost:8000/api/municipios" + '/'+ id);  
  }
  
  editMuni(id: any , put: Municipios):Observable<Municipios>{
    let direccion = "http://localhost:8000/api/municipios" + "/"+ id;
    return this.http.put<Municipios>(direccion, put)
  }
  //LOCALIDAD
  agreLocalidad(localidad: any):Observable<any>{
    let direccion = "http://localhost:8000/api/localidades";
    return this.http.post<any>(direccion, localidad)
  } 

  deleteL(id:any): Observable<any>{
    return this.http.delete<any>("http://localhost:8000/api/localidades" + '/'+ id);
  }
  
  getIdLocalidad(id:any):Observable<Localidades>{
    return this.http.get<Localidades>("http://localhost:8000/api/localidades" + '/'+ id);  
  }
  
  editLocalidad(id: any , put: Localidades):Observable<Localidades>{
    let direccion = "http://localhost:8000/api/localidades" + "/"+ id;
    return this.http.put<Localidades>(direccion, put)
  }

}
