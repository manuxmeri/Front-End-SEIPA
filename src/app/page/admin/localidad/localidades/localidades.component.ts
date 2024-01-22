import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { Distritos } from 'src/app/interfaces/distritos';
import { Localidades } from 'src/app/interfaces/localidades';
import { Municipios } from 'src/app/interfaces/municipios';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-localidades',
  templateUrl: './localidades.component.html',
  styleUrls: ['./localidades.component.css']
})
export class LocalidadesComponent implements OnInit {

  FormLocalidad:FormGroup;
  data:  any[]=[];
  datos:  Municipios[]=[];
  distrito: Distritos[]=[];
  localidad: any[]=[];
  constructor(private snackBar: MatSnackBar, private dialog: MatDialog, private api:ApiService,private router:Router, public formulario:FormBuilder){ 
  this.FormLocalidad=this.formulario.group({
    NombreLocalidad: ['',Validators.required],
    Munid: ['',Validators.required],
    Disid: ['',Validators.required],
    Regid: ['',Validators.required],
     });
     console.log(this.FormLocalidad);
}
  
  ngOnInit(): void {
  this.localidades();
   this.municipios();
   this.region();
   this.distritos();
  }
  localidades(){
    this.api.getLocalidades().subscribe((response: any ) => { 
      this.localidad = response.data;
    console.log(response);
    })
  }
  municipios(){
    this.api.getMunicipios().subscribe((response: any ) => { 
      this.datos = response.data;
    console.log(response);
    })
  }
  region(){
    this.api.getRegiones().subscribe((response: any ) => { 
      this.data = response.data;
    console.log(response);
    })
  }

  distritos(){
    this.api.getDistritos().subscribe((response: any ) => { 
      this.distrito = response.data;
    console.log(response);
    })
  }
  
  enviar(): any {
    console.log(this.FormLocalidad.value);
    this.api.agreLocalidad(this.FormLocalidad.value).subscribe(() => {
      this.router.navigateByUrl('localidades', { skipLocationChange: true }).then(() => {
        this.router.navigate(['localidades']);
        this.mostrarSnackBar('SE AGREGÓ CON ÉXITO', 'success-snackbar');
        window.location.reload();
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

editar(id = []){
  this.router.navigate(['edit-localidad', id]);
  }

  
  borrar(id: any, iControl: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: 'Confirmación', message: ' ¿Estás seguro de que deseas eliminar este dato?' },
      disableClose: true,
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.api.deleteL(id).subscribe(
          () => {
            this.localidad.splice(iControl, 1);
            this.mostrarMensajeExitoso(' DATO ELIMINADO EXITOSAMENTE');
          },
          (error) => {
            this.mostrarMensajeError(' ERROR AL ELIMINAR EL DATO. POR FAVOR, INTÉNTALO DE NUEVO');
          }
        );
      } else {
        console.log('Eliminación cancelada.');
      }
    });
  }
  
  mostrarMensajeExitoso(mensaje: string): void {
    this.snackBar.open(mensaje, '', {
      duration: 3000,
      panelClass: ['success-snackbar'], 
    });
  }
  cancelar() {
    this.router.navigateByUrl('panel');
  }

  mostrarMensajeError(mensaje: string): void {
    this.snackBar.open(mensaje, '', {
      duration: 3000, 
      panelClass: ['error-snackbar'], 
    });
  }
  


}
