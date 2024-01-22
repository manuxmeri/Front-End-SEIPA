import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/page/servicio/api.service';

@Component({
  selector: 'app-agregar-ofi',
  templateUrl: './agregar-ofi.component.html',
  styleUrls: ['./agregar-ofi.component.css']
})

export class AgregarOfiComponent implements OnInit {
  data:  any[]=[];
  FormOfi:FormGroup;
  constructor(private  api:ApiService,private router:Router, public formulario:FormBuilder){
   this.FormOfi=this.formulario.group({
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
  this.api.getOfi().subscribe((response: any) => { 
    this.data = response.data;
  console.log(response);
  })
}

editar(id = []){
  this.router.navigate(['editOfi', id]);
  }

enviar(): any{
    console.log(this.FormOfi.value);
    this.api.agreOfi(this.FormOfi.value).subscribe();
    this.router.navigateByUrl('/');
    }

    borrar(id:any, iControl:any){
      console.log(id);
      console.log(iControl);
      this.api.delete(id).subscribe(dato =>{
        this.data.splice(iControl, 1);
    
      });
  
    }
}