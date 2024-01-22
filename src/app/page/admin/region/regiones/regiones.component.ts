import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.css']
})
export class RegionesComponent implements OnInit {

  FormRegion:FormGroup;
  data:  any[]=[];
  constructor(private snackBar: MatSnackBar, private dialog: MatDialog, private api:ApiService,private router:Router, public formulario:FormBuilder){ 
  this.FormRegion=this.formulario.group({
    NombreRegion: ['',Validators.required],
     });
     console.log(this.FormRegion);
}
  
  ngOnInit(): void {
   this.region();
  }

  region(){
    this.api.getRegiones().subscribe((response: any ) => { 
      this.data = response.data;
    console.log(response);
    })
  }
  
  enviar(): any {
    console.log(this.FormRegion.value);
    this.api.agrerRegion(this.FormRegion.value).subscribe(() => {
      this.router.navigateByUrl('regiones', { skipLocationChange: true }).then(() => {
        this.router.navigate(['regiones']);
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


cancelar() {
  this.router.navigateByUrl('panel');
}
editar(id = []){
  this.router.navigate(['edit-region', id]);
  }

  
  borrar(id: any, iControl: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: 'Confirmación', message: ' ¿Estás seguro de que deseas eliminar este dato?' },
      disableClose: true,
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.api.deleteR(id).subscribe(
          () => {
            this.data.splice(iControl, 1);
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


  mostrarMensajeError(mensaje: string): void {
    this.snackBar.open(mensaje, '', {
      duration: 3000, 
      panelClass: ['error-snackbar'], 
    });
  }
  


}


