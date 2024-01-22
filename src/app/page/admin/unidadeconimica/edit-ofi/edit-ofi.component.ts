import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/page/servicio/api.service';

@Component({
  selector: 'app-edit-ofi',
  templateUrl: './edit-ofi.component.html',
  styleUrls: ['./edit-ofi.component.css']
})
export class EditOfiComponent implements OnInit {
  formuOfi: FormGroup;
  idOficina: any;

  constructor(public formulario: FormBuilder, private api:ApiService,private router:Router, private active:ActivatedRoute ){
    this.idOficina = this.active.snapshot.paramMap.get('id');
    this.api.getIdOfi(this.idOficina).subscribe(dato =>{
      console.log(dato);
      this.formuOfi.setValue({
        id: dato[0]['id'].dato,
        NombreOficina: dato[0]['NombreOficina'],
        Ubicacion: dato[0]['Ubicacion'],
        Telefono: dato[0]['Telefono'],
        Email: dato[0]['Email']
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

  ngOnInit(): void {}

put():any{
console.log(this.idOficina);
console.log(this.formuOfi.value);
this.api.editOfi(this.idOficina, this.formuOfi.value).subscribe(datos => {
  this.router.navigateByUrl('uniconomica');

});

}
}
