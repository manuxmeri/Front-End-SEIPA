import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { Roles } from 'src/app/interfaces/roles';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-embarcamayor',
  templateUrl: './embarcamayor.component.html',
  styleUrls: ['./embarcamayor.component.css']
})

export class EmbarcamayorComponent implements OnInit {
 
  data:  any[]=[];
  FormUni:FormGroup;
  constructor(private  api:ApiService ,private router:Router, public formulario:FormBuilder){
    this.FormUni=this.formulario.group({
      NombreOficina: [''],
      Ubicacion: [''],
      Telefono: [''],
      Email: ['']
      });
  }

  ngOnInit(): void {
  
    this.oficin();
  } 
  oficin(){
    this.api.getOfi().subscribe((response: any ) => { 
      this.data = response.data;
    console.log(response);
    })
  }
  
  uni(){
    this.api.getOfi().subscribe((response: any) => { 
      this.data = response.data;
    //  console.log(response);
    })
  }

  enviar(): any{
    //console.log(this.FormUni.value);
    this.api.agreOfi(this.FormUni.value).subscribe();
    this.router.navigateByUrl('solicitud');
    }

    editar(id = []){
      this.router.navigate(['editOfi', id]);
      }

      borrar(id:any, iControl:any){
        console.log(id);
        console.log(iControl);
        this.api.eliminar(id).subscribe(dato =>{
          this.data.splice(iControl, 1);
      
        });
    
      }


  
}



