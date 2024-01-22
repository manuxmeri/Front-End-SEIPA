import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Distritos } from 'src/app/interfaces/distritos';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit-distrito',
  templateUrl: './edit-distrito.component.html',
  styleUrls: ['./edit-distrito.component.css']
})
export class EditDistritoComponent implements OnInit {
  formuDis: FormGroup;
  idDistrito: any;
  regiones: any[] = [];
  
  @Input() datosDistrito: Distritos = { id:'', NombreDistrito: '', Regid: '' };
  constructor(public formulario: FormBuilder, private api:ApiService,private router:Router, private activate:ActivatedRoute ){
    this.idDistrito = this.activate.snapshot.paramMap.get('id');
    this.api.getIdDis(this.idDistrito).subscribe(datosDistrito =>{
      console.log(datosDistrito);
      this.formuDis.setValue({
        id: datosDistrito[0]['id'],
        NombreDistrito: datosDistrito[0]['NombreDistrito'],
        Regid: datosDistrito[0]['Regid']
      }
      );
    }
    );
    this.formuDis=this.formulario.group({
      id: [''],
      NombreDistrito: [''],
      Regid: ['']
      });
  }
  
  ngOnInit(): void {
   this.showDistrito();
   this.getregiones();
  }

 showDistrito(){
  this.api.getIdDis(this.activate.snapshot.params['id']).subscribe((response: any) => {
    this.datosDistrito = response.data;
    console.log(response);
  });
 }
    
 getregiones(): void {
  this.api.getRegiones().subscribe((response: any) => {
    this.regiones = response.data;
    console.log('regiones:', this.regiones);
  });
}

  put():any{
    this.api.editDis(this.idDistrito, this.formuDis.value).subscribe(datosDistritos => {
      this.router.navigateByUrl('distritos');
    
    });
    
}}
