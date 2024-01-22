import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-crear-oficina',
  templateUrl: './crear-oficina.component.html',
  styleUrls: ['./crear-oficina.component.css']
})
export class CrearOficinaComponent implements OnInit {
    data:  any[]=[];
    FormOfi:FormGroup;
    constructor(private snackBar: MatSnackBar, private  api:ApiService,private router:Router, public formulario:FormBuilder){
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
  
  enviar(): any {
    console.log(this.FormOfi.value);
    this.api.agreOfi(this.FormOfi.value).subscribe(() => {
      this.router.navigateByUrl('oficinas', { skipLocationChange: false }).then(() => {
        this.router.navigate(['oficinas']);
        this.mostrarSnackBar('SE AGREGO CON EXTITO', 'success-snackbar');
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
   