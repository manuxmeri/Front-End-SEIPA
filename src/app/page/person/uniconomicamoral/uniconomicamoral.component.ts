import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Oficina } from 'src/app/interfaces/oficina';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-uniconomicamoral',
  templateUrl: './uniconomicamoral.component.html',
  styleUrls: ['./uniconomicamoral.component.css']
})
export class UniconomicamoralComponent implements OnInit {
  localidades: any[] = [];
  Dueno: any[] = [];
  oficinas: Oficina[] = [];
  FormUniMoral: FormGroup;
  constructor(private snackBar: MatSnackBar, private api: ApiService, private router: Router, public formulario: FormBuilder) {
    this.FormUniMoral = this.formulario.group({
      UEDuenoid: [''],
      Ofcid: [''],
      FechaRegistro: [this.obtenerFechaActual()],
      RNPA: [''],
      RFC: [''],
      RazonSocial: [''],
      Email: [''],
      Calle: [''],
      NmExterior: [''],
      NmInterior: [''],
      CodigoPostal: [''],
      Locid: [''],
      NmPrincipal: [''],
      TpNmPrincipal: [''],
      NmSecundario: [''],
      TpNmSecundario: [''],
      IniOperaciones: [''],
      ActivoEmbMayor: [false],
      ActivoEmbMenor: [false],
      ActvAcuacultura: [false],
      CantidadPescadores: [''],
      ActvPesca: [false],
      DocRepresentanteLegal: [''],
      DocActaConstitutiva: [''],
      DocActaAsamblea: [''],
    });
    console.log(this.FormUniMoral);
  }

  ngOnInit(): void {
    this.getLocalidades();
    this.getOficinas();
    this.getUEDuenoid();
  }

  obtenerFechaActual(): string {
    const fechaActual = new Date();
    return fechaActual.toISOString().substring(0, 10);
  }

  getUEDuenoid(): void {
    this.api.getUnifisica().subscribe((response: any) => {
      this.Dueno = response.data;
      console.log('UEDuenoid:', this.Dueno);
    });
  }

  getLocalidades(): void {
    this.api.getLoc().subscribe((response: any) => {
      this.localidades = response.data;
      console.log('Localidades:', this.localidades);
    });
  }

  getOficinas(): void {
    this.api.getOfi().subscribe((response: any) => {
      this.oficinas = response.data;
      console.log('Oficinas:', this.oficinas);
    });
  }


  
  enviar(): void {
    console.log(this.FormUniMoral.value);
    const cantidadPescadores = this.FormUniMoral.get('CantidadPescadores').value;

    this.api.agreMoral(this.FormUniMoral.value).subscribe(() => {
      this.mostrarSnackBar('SE AGREGO CON ÉXITO', 'success-snackbar');

      if (cantidadPescadores >= 1) {
        this.duplicarCantidadPescadores(cantidadPescadores);
      } else {
        this.router.navigate(['solicitud']);
      }
    }, error => {
      console.error('Error al guardar UnidadMoral:', error);
    });
  }
  duplicarCantidadPescadores(cantidad: number): void {
    const nuevaCantidad = cantidad * 1;
    this.router.navigate(['socios', nuevaCantidad]);
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