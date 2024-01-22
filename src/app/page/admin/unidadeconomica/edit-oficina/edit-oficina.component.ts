import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Oficina } from 'src/app/interfaces/oficina';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit-oficina',
  templateUrl: './edit-oficina.component.html',
  styleUrls: ['./edit-oficina.component.css'],
  
})
export class EditOficinaComponent implements OnInit {
  formuOfi: FormGroup;
  idOficina: any;
  
  @Input() datosOficina: Oficina = { id:'', NombreOficina: '', Ubicacion: '',Telefono: '', Email: '' };
  constructor(private snackBar: MatSnackBar, public formulario: FormBuilder, private api:ApiService,private router:Router, private activate:ActivatedRoute ){
    this.idOficina = this.activate.snapshot.paramMap.get('id');
    this.api.getId(this.idOficina).subscribe(datosOficina =>{
      console.log(datosOficina);
      this.formuOfi.setValue({
        id: datosOficina[0]['id'],
        NombreOficina: datosOficina[0]['NombreOficina'],
        Ubicacion: datosOficina[0]['Ubicacion'],
        Telefono: datosOficina[0]['Telefono'],
        Email: datosOficina[0]['Email']
      }
      );
    }
    );
    this.formuOfi=this.formulario.group({
      id: [''],
      NombreOficina: [''],
      Ubicacion: [''],
      Telefono: [''],
      Email: ['']
      });
  }
  
  ngOnInit(): void {
   
   this.showOFicina();
   
   
  }
 showOFicina(){
  this.api.getId(this.activate.snapshot.params['id']).subscribe((response: any) => {
      
    this.datosOficina = response.data;
    console.log(response);
  });
 }
  
  

put() {
  this.api.editOfi(this.idOficina, this.formuOfi.value).subscribe(
    () => {
      this.router.navigateByUrl('oficinas');
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
