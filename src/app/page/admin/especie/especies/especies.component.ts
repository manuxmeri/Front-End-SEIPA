import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.css']
})
export class EspeciesComponent implements OnInit {

  FormEspecie:FormGroup;
  data:  any[]=[];
  constructor(private snackBar: MatSnackBar, private dialog: MatDialog, private api:ApiService,private router:Router, public formulario:FormBuilder){ 
  this.FormEspecie=this.formulario.group({
    NombreEspecie: ['',Validators.required],
     });
     console.log(this.FormEspecie);
}
  
ngOnInit(): void {
  this.espe();
 }

 espe(){
   this.api.getEspecie().subscribe((response: any ) => { 
     this.data = response.data;
   console.log(response);
   })
 }

enviar(): any {
  console.log(this.FormEspecie.value);
  this.api.agreEsp(this.FormEspecie.value).subscribe(() => {
    this.router.navigateByUrl('especies', { skipLocationChange: true }).then(() => {
      this.router.navigate(['especies']);
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
  this.router.navigate(['edit-especie', id]);
  }

  
  borrar(id: any, iControl: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: 'Confirmación', message: ' ¿Estás seguro de que deseas eliminar este dato?' },
      disableClose: true,
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.api.delete(id).subscribe(
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
