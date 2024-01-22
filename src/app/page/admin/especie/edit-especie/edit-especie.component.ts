import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Especies } from 'src/app/interfaces/especies';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit-especie',
  templateUrl: './edit-especie.component.html',
  styleUrls: ['./edit-especie.component.css']
})
export class EditEspecieComponent implements OnInit {
  formuEsp: FormGroup;
  idEspecie: any;
  
  @Input() datosEspecie: Especies = { id:'', NombreEspecie: '' };
  constructor(public formulario: FormBuilder, private api:ApiService,private router:Router, private activate:ActivatedRoute ){
    this.idEspecie = this.activate.snapshot.paramMap.get('id');
    this.api.getIdEs(this.idEspecie).subscribe(datosEspecie =>{
      console.log(datosEspecie);
      this.formuEsp.setValue({
        id: datosEspecie[0]['id'],
       NombreEspecie: datosEspecie[0]['NombreEspecie']
      }
      );
    }
    );
    this.formuEsp=this.formulario.group({
      id: [''],
      NombreEspecie: [''],
      });
  }
  
  ngOnInit(): void {
    this.showEspecie();
  }

 showEspecie(){
  this.api.getIdEs(this.activate.snapshot.params['id']).subscribe((response: any) => {
    this.datosEspecie = response.data;
    console.log(response);
  });
 }
  
  put():any{
    this.api.editEsp(this.idEspecie, this.formuEsp.value).subscribe(datosEspecies => {
      this.router.navigateByUrl('especies');
    
    });
    
}}
