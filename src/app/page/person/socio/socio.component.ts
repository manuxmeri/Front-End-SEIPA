import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {
  UniMoral: any[] = [];
  forms: FormGroup[] = [];

  constructor(private snackBar: MatSnackBar, private api: ApiService, private router: Router, private route: ActivatedRoute, public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getUnidadMoral();
    this.route.params.subscribe(params => {
      const quantity = +params['id'];
      this.generateForms(quantity);
    });
  }

  getUnidadMoral(): void {
    this.api.getMoral().subscribe((response: any) => {
      this.UniMoral = response.data;
      console.log('UEDuenoid:', this.UniMoral);
    });
  }

  generateForms(quantity: number): void {
    for (let i = 0; i < quantity; i++) {
      const form = this.formBuilder.group({
        UEPAMid: [''],
        CURP: [''],
        ActvPesca: [false],
        ActvAcuacultura: [false],
        DocActaNacimiento: [''],
        DocComprobanteDomicilio: [''],
        DocCURP: [''],
        DocIdentificacionOfc: [''],
        DocRFC: ['']
      });
      this.forms.push(form);
    }
  }

  enviar(): void {
    this.forms.forEach(form => {
      console.log(form.value);
      this.api.agreSocio(form.value).subscribe(() => {
      });
    });

    this.router.navigateByUrl('solicitud', { skipLocationChange: false }).then(() => {
      this.router.navigate(['solicitud']);
      this.mostrarSnackBar('SE AGREGO CON ÉXITO', 'success-snackbar');
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

}


