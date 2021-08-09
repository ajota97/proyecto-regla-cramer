import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MatrizComponent } from './components/matriz/matriz.component';

const routes: Routes = [
  {
    path:'',//Ruta raiz
    component: HomeComponent
  },
  {
    path:'matriz',
    component: MatrizComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {path:'**',
   component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
