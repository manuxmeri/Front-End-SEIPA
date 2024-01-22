import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
  constructor(private snackBar: MatSnackBar, private api:ApiService,private router:Router, public formulario:FormBuilder){ 
  this.FormProducto=this.formulario.group({
    NombreComun:  [''],
    NombreCientifico:  [''],
    TPEspecieid: [''],
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
    this.router.navigateByUrl('productos', { skipLocationChange: false }).then(() => {
      this.router.navigate(['productos']);
      this.mostrarSnackBar('SE AGREGO CON ÉXITO', 'success-snackbar');
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
