import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Localidades } from 'src/app/interfaces/localidades';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit-locaildad',
  templateUrl: './edit-locaildad.component.html',
  styleUrls: ['./edit-locaildad.component.css']
})
export class EditLocaildadComponent implements OnInit {
  formuLocalidad: FormGroup;
  idLocalidad: any;
  regiones: any[] = [];
  distritos: any[] = [];
  municipios: any[] = [];
  @Input() datosLocalidad: Localidades = { id:'',NombreLocalidad: '', Munid: '',Disid: '', Regid: '' };
  constructor(public formulario: FormBuilder, private api:ApiService,private router:Router, private activate:ActivatedRoute ){
    this.idLocalidad = this.activate.snapshot.paramMap.get('id');
    this.api.getIdLocalidad(this.idLocalidad).subscribe(datosLocalidad =>{
      console.log(datosLocalidad);
      this.formuLocalidad.setValue({
        id: datosLocalidad[0]['id'],
       NombreLocalidad: datosLocalidad[0]['NombreComun'],
        Munid: datosLocalidad[0]['Munid'],
        Disid: datosLocalidad[0]['Disid'],
        Regid: datosLocalidad[0]['Regid']
      }
      );
    }
    );
    this.formuLocalidad=this.formulario.group({
      id: [''],
     NombreLocalidad: [''],
      Munid: [''],
      Disid: [''],
      Regid: ['']
      });
  }
  
  ngOnInit(): void {
   this.showLocalidad();
   this.getMunicipio();
   this.getRegion();
   this.getDistrito();
  }

 showLocalidad(){
  this.api.getIdLocalidad(this.activate.snapshot.params['id']).subscribe((response: any) => { 
    this.datosLocalidad = response.data;
    console.log(response);
  });
 }
   
 getMunicipio(): void {
  this.api.getMunicipios().subscribe((response: any) => {
    this.municipios = response.data;
    console.log('municipio:', this.municipios);
  });
}

 getRegion(): void {
  this.api.getRegiones().subscribe((response: any) => {
    this.regiones = response.data;
    console.log('region:', this.regiones);
  });
}

getDistrito(): void {
  this.api.getDistritos().subscribe((response: any) => {
    this.distritos = response.data;
    console.log('distrito:', this.distritos);
  });
}

  put():any{
    this.api.editMuni(this.idLocalidad, this.formuLocalidad.value).subscribe(datosLocalidads => {
      this.router.navigateByUrl('municipios');
    
    });
    
}}
