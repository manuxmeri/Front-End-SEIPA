import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-soli',
  templateUrl: './modal-soli.component.html',
  styleUrls: ['./modal-soli.component.css']
})
export class ModalSoliComponent {
  tipoSolicitud: string = 'altaF';
  modalidad: string = "unidad_economicaF";
  constructor(
    public dialogRef: MatDialogRef<ModalSoliComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) {
    if (data && data.modalidad) {
      this.modalidad = data.modalidad;
    }
  }

  onAceptarClick() {
    switch (this.tipoSolicitud) {
      case 'altaF':
        this.router.navigate(['uniconomica']);
        break;
      case 'altaM':
        this.router.navigate(['unimoral']);
        break;
      case 'modificarEmail':

        break;
      case 'modificarColaboradores':

        break;
      case 'modificarDireccion':

        break;
      default:

        break;
    }
    this.dialogRef.close();
  }

}