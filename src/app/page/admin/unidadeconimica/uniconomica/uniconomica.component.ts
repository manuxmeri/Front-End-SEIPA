import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../servicio/api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Oficina } from '../../interfaces/Oficina';

@Component({
  selector: 'app-uniconomica',
  templateUrl: './uniconomica.component.html',
  styleUrls: ['./uniconomica.component.css']
})
export class UniconomicaComponent implements OnInit {
  data:  any[]=[];
  FormUni:FormGroup;
  constructor(private  api:ApiService,private router:Router, public formulario:FormBuilder){
    this.FormUni=this.formulario.group({
    Ofcid: [''],
    FechaRegistro: [''],
    RNPA: ['']
      });
  }
  ngOnInit(): void {
    this.uni();
    this.oficin();
  } 

  uni(){
    this.api.getUni().subscribe((response: any) => { 
      this.data = response.data;
    //  console.log(response);
    })
  }

  enviar(): any{
    //console.log(this.FormUni.value);
    this.api.agregar(this.FormUni.value).subscribe();
    this.router.navigateByUrl('solicitud');
    }


  oficin(){
    this.api.getOfi().subscribe((response: any) => { 
      this.data = response.data;
    console.log(response);
    })
  }

  /*enviar(): any{
    //console.log(this.FormUni.value);
    this.api.agreOfi(this.FormUni.value).subscribe();
    this.router.navigateByUrl('solicitud');
    }*/

    ruta(){
      this.router.navigateByUrl('agregarOfi');
      }

      borrar(id:any, iControl:any){
        console.log(id);
        console.log(iControl);
        this.api.eliminar(id).subscribe(dato =>{
          this.data.splice(iControl, 1);
      
        });
    
      }
  
  }






