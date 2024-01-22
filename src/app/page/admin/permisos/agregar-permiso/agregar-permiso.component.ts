import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Roles } from '../../../../interfaces/roles';

@Component({
  selector: 'app-agregar-permiso',
  templateUrl: './agregar-permiso.component.html',
  styleUrls: ['./agregar-permiso.component.css']
})
export class AgregarPermisoComponent implements OnInit {
  rol:  Roles[]=[];
  constructor(private  api:ApiService,private router:Router) { }

  ngOnInit(): void {
  this.Roles();
  }

  Roles(){
    this.api.getRoles().subscribe((response: any ) => { 
      this.rol = response.data;
    console.log(response);
    })
  }
}
