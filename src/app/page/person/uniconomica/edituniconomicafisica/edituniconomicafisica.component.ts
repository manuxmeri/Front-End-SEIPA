import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Uniconomicafisica } from 'src/app/interfaces/uniconomicafisica';
import { ApiService } from 'src/app/service/api.service';



@Component({
  selector: 'app-edituniconomicafisica',
  templateUrl: './edituniconomicafisica.component.html',
  styleUrls: ['./edituniconomicafisica.component.css']
})
export class EdituniconomicafisicaComponent implements OnInit {

  formUnid: FormGroup;
  idUnidad: any;
  oficinas: any[] = [];
  localidades: any[] = [];

  @Input() datosUnidadF: Uniconomicafisica = {
    id: '', FechaRegistro: '', Ofcid: '', RNPA: '', RFC: '', CURP: '', Nombres: '', ApPaterno: '',
    ApMaterno: '', FechaNacimiento: '', Sexo: '', GrupoSanguineo: '', Email: '', Calle: '', NmExterior: '', NmInterior: '', CodigoPostal: '',
    Locid: '', NmPrincipal: '', TpNmPrincipal: '', NmSecundario: '', TpNmSecundario: '',IniOperaciones: '', ActivoEmbMayor: '', ActivoEmbMenor: '', ActvAcuacultura: '', ActvPesca: '', DocActaNacimiento: '',
    DocComprobanteDomicilio: '', DocCURP: '', DocIdentificacionOfc: '', DocRFC: ''
  };
  constructor(private snackBar: MatSnackBar, public formulario: FormBuilder, private api: ApiService, private router: Router, private activate: ActivatedRoute) {
    this.idUnidad = this.activate.snapshot.paramMap.get('id');
    this.api.getIdUnidadF(this.idUnidad).subscribe(datosUnidadF => {
      console.log(datosUnidadF);
      this.formUnid.setValue({
        id: datosUnidadF[0]['id'],
        FechaRegistro: datosUnidadF[0]['FechaRegistro'],
        Ofcid: datosUnidadF[0]['Ofcid'],
        RNPA: datosUnidadF[0]['RNPA'],
        RFC: datosUnidadF[0]['RFC'],
        CURP: datosUnidadF[0]['CURP'],
        Nombres: datosUnidadF[0]['Nombres'],
        ApPaterno: datosUnidadF[0]['ApPaterno'],
        ApMaterno: datosUnidadF[0]['ApMaterno'],
        FechaNacimiento: datosUnidadF[0]['FechaNacimiento'],
        Sexo: datosUnidadF[0]['Sexo'],
        GrupoSanguineo: datosUnidadF[0]['GrupoSanguineo'],
        Email: datosUnidadF[0]['Email'],
        Calle: datosUnidadF[0]['Calle'],
        NmExterior: datosUnidadF[0]['NmExterior'],
        NmInterior: datosUnidadF[0]['NmInterior'],
        CodigoPostal: datosUnidadF[0]['CodigoPostal'],
        Locid: datosUnidadF[0]['Locid'],
        NmPrincipal: datosUnidadF[0]['NmPrincipal'],
        TpNmPrincipal: datosUnidadF[0]['TpNmPrincipal'],
        NmSecundario: datosUnidadF[0]['NmSecundario'],
        TpNmSecundario: datosUnidadF[0]['TpNmSecundario'],
        IniOperaciones: datosUnidadF[0]['IniOperaciones'],
        ActivoEmbMayor: !!datosUnidadF[0]['ActivoEmbMayor'],
        ActivoEmbMenor: !!datosUnidadF[0]['ActivoEmbMenor'],
        ActvAcuacultura: !!datosUnidadF[0]['ActvAcuacultura'],
        ActvPesca: !!datosUnidadF[0]['ActvPesca'],
        DocActaNacimiento: datosUnidadF[0]['DocActaNacimiento'],
        DocComprobanteDomicilio: datosUnidadF[0]['DocComprobanteDomicilio'],
        DocCURP: datosUnidadF[0]['DocCURP'],
        DocIdentificacionOfc: datosUnidadF[0]['DocIdentificacionOfc'],
        DocRFC: datosUnidadF[0]['DocRFC']
      }
      );
    }
    );
    this.formUnid = this.formulario.group({
      id: [''],
      FechaRegistro: [''],
      Ofcid: [''],
      RNPA: [''],
      RFC: [''],
      CURP: [''],
      Nombres: [''],
      ApPaterno: [''],
      ApMaterno: [''],
      FechaNacimiento: [''],
      Sexo: [''],
      GrupoSanguineo: [''],
      Email: [''],
      Calle: [''],
      NmExterior: [''],
      NmInterior: [''],
      CodigoPostal: [''],
      NmPrincipal: [''],
      TpNmPrincipal: [''],
      NmSecundario: [''],
      TpNmSecundario: [''],
      Locid: [''],
      IniOperaciones: [''],
      ActivoEmbMayor: [false],
      ActivoEmbMenor: [false],
      ActvAcuacultura: [false],
      ActvPesca: [false],
      DocActaNacimiento: [''],
      DocComprobanteDomicilio: [''],
      DocCURP: [''],
      DocIdentificacionOfc: [''],
      DocRFC: ['']
    });
  }

  ngOnInit(): void {
    this.showUnidadF();
    this.getOficinas();
    this.getLocalidades();

  }
  showUnidadF() {
    this.api.getIdUnidadF(this.activate.snapshot.params['id']).subscribe((response: any) => {

      this.datosUnidadF = response.data;
      console.log(response);
    });
  }

 getLocalidades(): void {
    this.api.getLocalidades().subscribe((response: any) => {
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

  put() {
    console.log(this.formUnid);
    this.api.editUnidadF(this.idUnidad, this.formUnid.value).subscribe(
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
