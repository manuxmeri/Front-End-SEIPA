import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-oficinas',
  templateUrl: './oficinas.component.html',
  styleUrls: ['./oficinas.component.css']
})
export class OficinasComponent implements OnInit {
  
  data:  any[]=[];
  FormOfi:FormGroup;
  
  constructor(private snackBar: MatSnackBar, private dialog: MatDialog, private  api:ApiService ,private router:Router, public formulario:FormBuilder){
    this.FormOfi=this.formulario.group({
      NombreOficina: ['', Validators.required],
      Ubicacion: ['',Validators.required],
      Telefono: ['',Validators.required],
      Email: ['',Validators.required]
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

  
 
    enviar(): any {
      console.log(this.FormOfi.value);
      this.api.agreOfi(this.FormOfi.value).subscribe(() => {
        this.router.navigateByUrl('oficinas', { skipLocationChange: true }).then(() => {
          this.router.navigate(['oficinas']);
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
      this.router.navigate(['edit-oficina', id]);
      }

      
      borrar(id: any, iControl: any) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          data: { title: 'Confirmación', message: ' ¿Estás seguro de que deseas eliminar este dato?' },
          disableClose: true,
        });
      
        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            this.api.eliminar(id).subscribe(
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
