import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../services/menu-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu:any[] = [];
  currentUserRole: string = "usuario"; 
  roles: string[] = ["usuario", "administrador"];

  constructor(private menuService: MenuServiceService) { }

  ngOnInit() {
    if (this.roles.includes(this.currentUserRole)) {
      this.menuService.getMenu().subscribe((data: Object) => {
        if (Array.isArray(data)) {
          this.menu = data.filter(item => item.roles.includes(this.currentUserRole));
        } else {
          console.error("Los datos obtenidos del servicio no son un arreglo válido");
        }
      });
    } else {
      console.error("Rol de usuario no válido");
    }
  }
}