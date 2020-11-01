import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreAboutComponent } from './store-about/store-about.component';
import { StoreHomeComponent } from './store-home/store-home.component';//agrega automaticamente lois imports de los componenetes

const routes: Routes = [//aca es donde se declaran las rutas, este es el ruteo
  { 
    path: 'products',//lo que viene por URL
    component:  StoreHomeComponent //al componente que lo dirige
  },
  { 
    path: '', //si es vacio
    redirectTo:  'products', //redirectTo, redirecciona la url a en este caso products, cuando es vacia.
    pathMatch: 'full'
  },
  {   
    path: 'about',
    component:  StoreAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
