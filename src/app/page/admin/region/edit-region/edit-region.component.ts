import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Regiones } from 'src/app/interfaces/regiones';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit-region',
  templateUrl: './edit-region.component.html',
  styleUrls: ['./edit-region.component.css']
})
export class EditRegionComponent implements OnInit {
  formuReg: FormGroup;
  idRegion: any;
  
  @Input() datosRegion: Regiones = { id:'', NombreRegion: '' };
  constructor(public formulario: FormBuilder, private api:ApiService,private router:Router, private activate:ActivatedRoute ){
    this.idRegion = this.activate.snapshot.paramMap.get('id');
    this.api.getIdRegion(this.idRegion).subscribe(datosRegion =>{
      console.log(datosRegion);
      this.formuReg.setValue({
        id: datosRegion[0]['id'],
        NombreRegion: datosRegion[0]['NombreRegion']
      }
      );
    }
    );
    this.formuReg=this.formulario.group({
      id: [''],
      NombreRegion: ['']
      });
  }
  
  ngOnInit(): void {
   this.showRegion();
  }

 showRegion(){
  this.api.getIdRegion(this.activate.snapshot.params['id']).subscribe((response: any) => {
    this.datosRegion = response.data;
    console.log(response);
  });
 }
    
  put():any{
   
    this.api.editRegion(this.idRegion, this.formuReg.value).subscribe(datosRegions => {
      this.router.navigateByUrl('regiones');
    
    });
    
}}

