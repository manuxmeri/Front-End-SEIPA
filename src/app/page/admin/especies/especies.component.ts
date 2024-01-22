import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.css']
})
export class EspeciesComponent implements OnInit {
  FormEspecie:FormGroup;
  data:  any[]=[];
  constructor(private snackBar: MatSnackBar, private api:ApiService,private router:Router, public formulario:FormBuilder){ 
  this.FormEspecie=this.formulario.group({
    NombreEspecie: [''],
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

cancelar() {
  this.router.navigateByUrl('panel');
}
}
