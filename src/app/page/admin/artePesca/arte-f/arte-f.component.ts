import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-arte-f',
  templateUrl: './arte-f.component.html',
  styleUrls: ['./arte-f.component.css']
})
export class ArteFComponent implements OnInit {

  FormArte:FormGroup;
  data:  any[]=[];
  constructor(private snackBar: MatSnackBar, private dialog: MatDialog, private api:ApiService,private router:Router, public formulario:FormBuilder){ 
  this.FormArte=this.formulario.group({
    NombreArtePesca: ['',Validators.required],
     });
     console.log(this.FormArte);
}
  
  ngOnInit(): void {
   this.arte();
  }

  arte(){
    this.api.getArt().subscribe((response: any ) => { 
      this.data = response.data;
    console.log(response);
    })
  }
  
  enviar(): any {
    console.log(this.FormArte.value);
    this.api.agreArt(this.FormArte.value).subscribe(() => {
      this.router.navigateByUrl('artefisica', { skipLocationChange: true }).then(() => {
        this.router.navigate(['artefisica']);
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
  this.router.navigate(['edit-arte', id]);
  }

  
  borrar(id: any, iControl: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: 'Confirmación', message: ' ¿Estás seguro de que deseas eliminar este dato?' },
      disableClose: true,
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.api.deleteA(id).subscribe(
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
