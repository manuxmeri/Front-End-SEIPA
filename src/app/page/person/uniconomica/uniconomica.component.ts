import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

import { RegionService } from 'src/app/service/region.service';
import { Regiones } from 'src/app/interfaces/regiones';
import { Oficina } from 'src/app/interfaces/oficina';
import { Municipios } from 'src/app/interfaces/municipios';
import { Localidades } from '../../../interfaces/localidades';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-uniconomica',
  templateUrl: './uniconomica.component.html',
  styleUrls: ['./uniconomica.component.css']
})
export class UniconomicaComponent implements OnInit {
  regi: Regiones[]=[];
  oficinas:  Oficina[]=[];
  muni: Municipios[]=[];
  locali: Localidades[]=[];
  FormUni:FormGroup;
  constructor(private snackBar: MatSnackBar,private  api:ApiService,private apiRegiones:RegionService ,private router:Router, public formulario:FormBuilder,) {
    this.FormUni=this.formulario.group({
      FechaRegistro: ['',Validators.required],
      Ofcid: ['',Validators.required],
      RNPA: ['',Validators.required],
      RFC: ['',Validators.required],
      CURP: ['',Validators.required],
      Nombres: ['',Validators.required],
      ApPaterno: ['',Validators.required],
      ApMaterno: ['',Validators.required],
      FechaNacimiento: ['',Validators.required],
      Sexo: ['',Validators.required],
      GrupoSanguineo: ['',Validators.required],
      Email: ['',Validators.required],
      Calle: ['',Validators.required],
      NmExterior: ['',Validators.required],
      NmInterior: ['',Validators.required],
      CodigoPostal: ['',Validators.required],
      Locid: [''],
      NmPrincipal: ['',Validators.required],
      TpNmPrincipal: ['',Validators.required],
      NmSecundario: ['',Validators.required],
      TpNmSecundario: ['',Validators.required],
      IniOperaciones: ['',Validators.required],
      ActivoEmbMayor: [false],
      ActivoEmbMenor: [false],
      ActvAcuacultura: [false],
      ActvPesca: [false],
      DocActaNacimiento: ['',Validators.required],
      DocComprobanteDomicilio: ['',Validators.required],
      DocCURP: ['',Validators.required],
      DocIdentificacionOfc: ['',Validators.required],
      DocRFC: ['',Validators.required],
       });
       console.log(this.FormUni);
  }
   
  ngOnInit(): void {
    this.Regiones();
    this.Municipios();
    this.oficin();
    this.Localidades();
   
  } 
  Regiones(){
    this.apiRegiones.getRegiones().subscribe((response: any ) => { 
      this.regi = response.data;
    console.log(response);
    })
  }

  Municipios(){
    this.api.getMunicipios().subscribe((response: any ) => { 
      this.muni = response.data;
    console.log(response);
    })
  }

  Localidades(){
    this.api.getLocalidades().subscribe((response: any ) => { 
      this.locali = response.data;
    console.log(response);
    })
  }

  oficin(){
    this.api.getOfi().subscribe((response: any ) => { 
      this.oficinas = response.data;
    console.log(response);
    })
  }

  
  enviar(): any {
    
    console.log(this.FormUni.value);
    this.api.agreUni(this.FormUni.value).subscribe(() => {
      this.router.navigateByUrl('solicitud', { skipLocationChange: false }).then(() => {
        this.router.navigate(['solicitud']);
        this.mostrarSnackBar('SE AGREGO CON ÉXITO', 'success-snackbar');
      });
    });

    
  }
  

  mostrarSnackBar(mensaje: string, clase: string): void {
    this.snackBar.open(mensaje, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [clase],
    });
  }

  
}
