import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditOficinaComponent } from '../edit-oficina/edit-oficina.component';

@Component({
  selector: 'app-oficinas',
  templateUrl: './oficinas.component.html',
  styleUrls: ['./oficinas.component.css']
})
export class OficinasComponent implements OnInit {
  data:  any[]=[];
  FormUni:FormGroup;
  
  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog, private  api:ApiService ,private router:Router, public formulario:FormBuilder){
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
    this.api.getUni().subscribe((response: any) => { 
      this.data = response.data;
    //  console.log(response);
    })
  }

  enviar(): any{
    console.log(this.FormUni.value);
   
    this.api.agreOfi(this.FormUni.value).subscribe();
    this.router.navigateByUrl('panel')

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
        this._snackBar.open(mensaje, '', {
          duration: 3000,
          panelClass: ['success-snackbar'], 
        });
      }
      
      mostrarMensajeError(mensaje: string): void {
        this._snackBar.open(mensaje, '', {
          duration: 3000, 
          panelClass: ['error-snackbar'], 
        });
      }
      

}
