import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CursosModule } from './cursos/cursos.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
     AlunosComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    CursosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
