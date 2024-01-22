import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SolicitudComponent } from './page/person/solicitud/solicitud.component';
import { UniconomicaComponent } from './page/person/uniconomica/uniconomica.component';
import { LoginuserComponent } from './login/user/loginuser/loginuser.component';
import { LoginComponent } from './login/admin/login/login.component';
import { EmbarcamayorComponent } from './page/person/embarcamayor/embarcamayor.component';
import { MenuComponent } from './shared/menu/menu.component';
import { EmbarcamenorComponent } from './page/person/embarcamenor/embarcamenor.component';
import { InstalacuicolaComponent } from './page/person/instalacuicola/instalacuicola.component';
import { PanelComponent } from './page/admin/panel/panel.component';
import { PermisosComponent } from './page/admin/permisos/permisos.component';
import { AgregarPermisoComponent } from './page/admin/permisos/agregar-permiso/agregar-permiso.component';
import { EdituniconomicafisicaComponent } from './page/person/uniconomica/edituniconomicafisica/edituniconomicafisica.component';
import { EspeciesComponent } from './page/admin/especie/especies/especies.component';
import { ArteFComponent } from './page/admin/artePesca/arte-f/arte-f.component';
import { UnidadconofisicasComponent } from './page/person/solicitud/unidadconofisicas/unidadconofisicas.component';
import { UniconomicamoralComponent } from './page/person/uniconomicamoral/uniconomicamoral.component';
import { SociosComponent } from './page/person/uniconomicamoral/socios/socios.component';
import { ProductosComponent } from './page/admin/producto/productos/productos.component';
import { RegionesComponent } from './page/admin/region/regiones/regiones.component';
import { DistritosComponent } from './page/admin/distrito/distritos/distritos.component';
import { MunicipiosComponent } from './page/admin/municipio/municipios/municipios.component';
import { LocalidadesComponent } from './page/admin/localidad/localidades/localidades.component';
import { OficinasComponent } from './page/admin/oficina/oficinas/oficinas.component';
import { EditOficinaComponent } from './page/admin/oficina/edit-oficina/edit-oficina.component';
import { EditEspecieComponent } from './page/admin/especie/edit-especie/edit-especie.component';
import { EditArteComponent } from './page/admin/artePesca/edit-arte/edit-arte.component';
import { EditProductoComponent } from './page/admin/producto/edit-producto/edit-producto.component';
import { EditRegionComponent } from './page/admin/region/edit-region/edit-region.component';
import { EditDistritoComponent } from './page/admin/distrito/edit-distrito/edit-distrito.component';
import { EditMunicipioComponent } from './page/admin/municipio/edit-municipio/edit-municipio.component';
import { EditLocaildadComponent } from './page/admin/localidad/edit-locaildad/edit-locaildad.component';


LoginComponent
const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'solicitud',
    component:SolicitudComponent
  },
  {
    path:'uniconomica',
    component:UniconomicaComponent
  },
  {
    path:'loginuser',
    component:LoginuserComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'embarcamayor',
    component:EmbarcamayorComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'embarcamenor',
    component:EmbarcamenorComponent
  },
  {
    path:'instalacuicola',
    component:InstalacuicolaComponent
  },

  {
    path:'panel',
    component:PanelComponent
  },
  {
    path:'oficinas',
    component:OficinasComponent
  },
  {
    path:'edit-oficina/:id',
    component:EditOficinaComponent
  },

  {
    path:'permisos',
    component:PermisosComponent
  },
  {
    path:'agregar-permiso',
    component:AgregarPermisoComponent
  },
  {
    path:'editar-unidadconomicafi/:id',
    component:EdituniconomicafisicaComponent
  },
  {
    path:'especies',
    component:EspeciesComponent
  },
  {
    path:'edit-especie/:id',
    component:EditEspecieComponent
  },
  {
    path:'artefisica',
    component:ArteFComponent
  },
  {
    path:'edit-arte/:id',
    component:EditArteComponent
  },
  {
    path:'unifisicas/:id',
    component:UnidadconofisicasComponent
  },
  
  {
    path:'unifisicas/:id',
    component:UniconomicamoralComponent
  },
  {
    path:'unimoral',
    component:UniconomicamoralComponent
  },
  {
    path:'socios/:id',
    component:SociosComponent
  },
  {
    path:'productos',
    component:ProductosComponent
  },
  {
    path:'edit-productos/:id',
    component:EditProductoComponent
  },
  {
    path:'regiones',
    component:RegionesComponent
  },
  {
    path:'edit-region/:id',
    component:EditRegionComponent
  },
  {
    path:'distritos',
    component:DistritosComponent
  },
  {
    path:'edit-distrito/:id',
    component:EditDistritoComponent
  },
  {
    path:'municipios',
    component:MunicipiosComponent
  },
  {
    path:'edit-municipio/:id',
    component:EditMunicipioComponent
  },
  {
    path:'localidades',
    component:LocalidadesComponent
  },
  {
    path:'edit-localidad/:id',
    component:EditLocaildadComponent
  },




  
  
  
  
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
