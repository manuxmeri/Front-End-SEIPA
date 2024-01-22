import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtePesca } from 'src/app/interfaces/arte-pesca';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit-arte',
  templateUrl: './edit-arte.component.html',
  styleUrls: ['./edit-arte.component.css']
})
export class EditArteComponent implements OnInit {
  formuArte: FormGroup;
  idArte: any;
  
  
  @Input() datosArte: ArtePesca = { id:'', NombreArtePesca: '' };
  constructor(public formulario: FormBuilder, private api:ApiService,private router:Router, private activate:ActivatedRoute ){
    this.idArte = this.activate.snapshot.paramMap.get('id');
    this.api.getIdArte(this.idArte).subscribe(datosArte =>{
      console.log(datosArte);
      this.formuArte.setValue({
        id: datosArte[0]['id'],
        NombreArtePesca: datosArte[0]['NombreArtePesca']
      }
      );
    }
    );
    this.formuArte=this.formulario.group({
      id: [''],
      NombreArtePesca: ['']
      });
  }
  
  ngOnInit(): void {
    this.showArte();
  }

 showArte(){
  this.api.getIdArte(this.activate.snapshot.params['id']).subscribe((response: any) => {
      
    this.datosArte = response.data;
    console.log(response);
  });
 }
    
  put():any{
    this.api.editArte(this.idArte, this.formuArte.value).subscribe(datosArtes => {
      this.router.navigateByUrl('artefisica');
    
    });
    
}}
