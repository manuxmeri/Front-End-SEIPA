import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniconomicaComponent } from './person/uniconomica/uniconomica.component';
import { SharedModule } from '../shared/shared.module';
import { SolicitudComponent } from './person/solicitud/solicitud.component';
import { EmbarcamayorComponent } from './person/embarcamayor/embarcamayor.component';
import { EmbarcamenorComponent } from './person/embarcamenor/embarcamenor.component';
import { InstalacuicolaComponent } from './person/instalacuicola/instalacuicola.component';
import { PanelComponent } from './admin/panel/panel.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { OficinasComponent } from './admin/oficina/oficinas/oficinas.component';
import { EditOficinaComponent } from './admin/oficina/edit-oficina/edit-oficina.component';
import { PermisosComponent } from './admin/permisos/permisos.component';
import { AgregarPermisoComponent } from './admin/permisos/agregar-permiso/agregar-permiso.component';
import { EdituniconomicafisicaComponent } from './person/uniconomica/edituniconomicafisica/edituniconomicafisica.component';
import { EspeciesComponent } from './admin/especie/especies/especies.component';
import { ArteFComponent } from './admin/artePesca/arte-f/arte-f.component';
import { ModalSoliComponent } from './person/modal-soli/modal-soli.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UnidadconofisicasComponent } from './person/solicitud/unidadconofisicas/unidadconofisicas.component';
import { UniconomicamoralComponent } from './person/uniconomicamoral/uniconomicamoral.component';
import { SociosComponent } from './person/uniconomicamoral/socios/socios.component';
import { ProductosComponent } from './admin/producto/productos/productos.component';
import { RegionesComponent } from './admin/region/regiones/regiones.component';
import { DistritosComponent } from './admin/distrito/distritos/distritos.component';
import { MunicipiosComponent } from './admin/municipio/municipios/municipios.component';
import { LocalidadesComponent } from './admin/localidad/localidades/localidades.component';
import { EditEspecieComponent } from './admin/especie/edit-especie/edit-especie.component';
import { EditArteComponent } from './admin/artePesca/edit-arte/edit-arte.component';
import { EditProductoComponent } from './admin/producto/edit-producto/edit-producto.component';
import { EditRegionComponent } from './admin/region/edit-region/edit-region.component';
import { EditDistritoComponent } from './admin/distrito/edit-distrito/edit-distrito.component';
import { EditMunicipioComponent } from './admin/municipio/edit-municipio/edit-municipio.component';
import { EditLocaildadComponent } from './admin/localidad/edit-locaildad/edit-locaildad.component';





@NgModule({
  declarations: [
    SolicitudComponent ,
    UniconomicaComponent,
    EmbarcamayorComponent,
    EmbarcamenorComponent,
    InstalacuicolaComponent,
    PanelComponent,
    OficinasComponent,
    EditOficinaComponent,
    PermisosComponent,
    AgregarPermisoComponent,
    EdituniconomicafisicaComponent,
    EspeciesComponent,
    ArteFComponent,
    ModalSoliComponent,
    UnidadconofisicasComponent,
    UniconomicamoralComponent,
    SociosComponent,
    ProductosComponent,
    RegionesComponent,
    DistritosComponent,
    MunicipiosComponent,
    LocalidadesComponent,
    EditEspecieComponent,
    EditArteComponent,
    EditProductoComponent,
    EditRegionComponent,
    EditDistritoComponent,
    EditMunicipioComponent,
    EditLocaildadComponent,
    
   
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    
   
  ]
,
exports: [
  SolicitudComponent ,
  UniconomicaComponent,

  
  
]
})
export class PageModule { }


