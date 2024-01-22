import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  FormProducto:FormGroup;
  especies: any[] = [];
  data:  any[]=[];
  constructor(private snackBar: MatSnackBar, private dialog: MatDialog, private api:ApiService,private router:Router, public formulario:FormBuilder){ 
  this.FormProducto=this.formulario.group({
    NombreComun:  ['',Validators.required],
    NombreCientifico:  ['',Validators.required],
    TPEspecieid: ['',Validators.required],
     });
     console.log(this.FormProducto);
}
  
  ngOnInit(): void {
    this.getespecies();
    this.producto();
  }

  producto(){
    this.api.getProd().subscribe((response: any ) => { 
      this.data = response.data;
    console.log(response);
    })
  }

  getespecies(): void {
    this.api.getEspecie().subscribe((response: any) => {
      this.especies = response.data;
      console.log('especies:', this.especies);
    });
  }


enviar(): any {
  console.log(this.FormProducto.value);
  this.api.agreProduc(this.FormProducto.value).subscribe(() => {
    this.router.navigateByUrl('productos', { skipLocationChange: true }).then(() => {
      this.router.navigate(['productos']);
      this.mostrarSnackBar('SE AGREGO CON ÉXITO', 'success-snackbar');
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
  this.router.navigate(['edit-productos', id]);
  }

  
  borrar(id: any, iControl: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: 'Confirmación', message: ' ¿Estás seguro de que deseas eliminar este dato?' },
      disableClose: true,
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.api.deleteP(id).subscribe(
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

