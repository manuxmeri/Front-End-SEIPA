import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { PageModule } from './page/page.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { PipesModule } from './pipes/pipes.module';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';







@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
  
    
  
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SharedModule,
    PageModule,
    HttpClientModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    
    
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
