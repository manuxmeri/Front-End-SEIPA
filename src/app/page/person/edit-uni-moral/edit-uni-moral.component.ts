import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { unidadMoral } from 'src/app/interfaces/unidadMoral';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit-uni-moral',
  templateUrl: './edit-uni-moral.component.html',
  styleUrls: ['./edit-uni-moral.component.css']
})
export class EditUniMoralComponent implements OnInit {
  localidades: any[] = [];
  Dueno: any[] = [];
  FormUniMoral: FormGroup;
  idUnidad: any;
  oficinas: any[] = [];
  id: any;
  @Input() datosUnidadM: unidadMoral  = {id: '', UEDuenoid: '', Ofcid: '', FechaRegistro: '', RNPA: '', RFC: '', RazonSocial: '', Email: '', Calle: '',
    NmExterior: '', NmInterior: '', CodigoPostal: '', Locid: '', NmPrincipal: '', TpNmPrincipal: '', NmSecundario: '', TpNmSecundario: '', IniOperaciones: '', ActivoEmbMayor: '', ActivoEmbMenor: '', ActvAcuacultura: '',
    CantidadPescadores: '', ActvPesca: '', DocRepresentanteLegal: '', DocActaConstitutiva: '', DocActaAsamblea: '',
  };
  constructor(private snackBar: MatSnackBar, public formulario: FormBuilder, private api: ApiService, private router: Router, private activate: ActivatedRoute) {
    this.idUnidad = this.activate.snapshot.paramMap.get('id');
    this.api.getIdUnidadM(this.idUnidad).subscribe(datosUnidadM => {
      console.log(datosUnidadM);
      this.FormUniMoral.setValue({
        id: datosUnidadM[0]['id'],
        UEDuenoid: datosUnidadM[0]['UEDuenoid'],
        Ofcid: datosUnidadM[0]['Ofcid'],
        FechaRegistro: datosUnidadM[0]['FechaRegistro'],
        RNPA: datosUnidadM[0]['RNPA'],
        RFC: datosUnidadM[0]['RFC'],
        RazonSocial: datosUnidadM[0]['RazonSocial'],
        Email: datosUnidadM[0]['Email'],
        Calle: datosUnidadM[0]['Calle'],
        NmExterior: datosUnidadM[0]['NmExterior'],
        NmInterior: datosUnidadM[0]['NmInterior'],
        CodigoPostal: datosUnidadM[0]['CodigoPostal'],
        Locid: datosUnidadM[0]['Locid'],
        NmPrincipal: datosUnidadM[0]['NmPrincipal'],
        TpNmPrincipal: datosUnidadM[0]['TpNmPrincipal'],
        NmSecundario: datosUnidadM[0]['NmSecundario'],
        TpNmSecundario: datosUnidadM[0]['TpNmSecundario'],
        IniOperaciones: datosUnidadM[0]['IniOperaciones'],
        ActivoEmbMayor: datosUnidadM[0]['ActivoEmbMayor'],
        ActivoEmbMenor: datosUnidadM[0]['ActivoEmbMenor'],
        ActvAcuacultura: datosUnidadM[0]['ActvAcuacultura'],
        CantidadPescadores: datosUnidadM[0]['CantidadPescadores'],
        ActvPesca: datosUnidadM[0]['ActvPesca'],
        DocRepresentanteLegal: datosUnidadM[0][' DocRepresentanteLegal'],
        DocActaConstitutiva: datosUnidadM[0]['DocActaConstitutiva'],
        DocActaAsamblea: datosUnidadM[0]['DocActaAsamblea'],
      }
      );
    }
    );
    this.FormUniMoral = this.formulario.group({
      id: [''],
      UEDuenoid: [''],
      Ofcid: [''],
      FechaRegistro: [''],
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
  }

  ngOnInit(): void {
    this.showUnidadM();
    this.getLocalidades();
    this.getOficinas();
    this.getUEDuenoid();
  }

  showUnidadM() {
    this.api.getIdUnidadM(this.activate.snapshot.params['id']).subscribe((response: any) => {

      this.datosUnidadM = response.data;
      console.log(response);
    });
  }

  getOficinas(): void {
    this.api.getOfi().subscribe((response: any) => {
      this.oficinas = response.data;
      console.log('Oficinas:', this.oficinas);
    });
  }

  getUEDuenoid(): void {
    this.api.getUni().subscribe((response: any) => {
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


  cancelar() {
    this.router.navigateByUrl('solicitud');
}

  put() {
    console.log(this.FormUniMoral);
    this.api.editUnidadM(this.idUnidad, this.FormUniMoral.value).subscribe(
      () => {
        this.router.navigateByUrl('solicitud');
        this.mostrarAlerta(' EDICIÓN EXITOSA', 'success');
      },
      (error) => {
        this.mostrarAlerta(' HUBO UN ERROR AL EDITAR', 'error');
      }
    );
  }

  mostrarAlerta(mensaje: string, tipo: 'success' | 'error') {
    this.snackBar.open(mensaje, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [tipo + '-snackbar'],
    });
  }






}
