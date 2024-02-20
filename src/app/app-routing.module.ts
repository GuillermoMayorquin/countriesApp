import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

const routes: Routes = [
  // {
  //   path: "home",
  //   component: HomePageComponent
  // },
  {
    path: "about",
    component: AboutPageComponent
  },
  {
    path: "contact",
    component: ContactPageComponent
  },
  {
    path: "countries",
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
  },
  {
    path: "**",
    redirectTo: "countries"
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

// ? Aqui se definen todas las rutas que se usaran en nuestro sitio se debe definir el path y el componente que se utilizara en esa ruta
// ? En el path 'countries' en vez de el component se pone el metodo loadChildren y se sigue la sintaxis importando el modulo de donde saldran las rutas hijas

