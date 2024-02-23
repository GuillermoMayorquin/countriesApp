import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
    ) {}

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id })  => this.countriesService.searchCountryByAlphaCode( id )),
      )
      .subscribe( (country) => {

        if( !country ) {
          return this.router.navigateByUrl('')
        }
        return;
      })

    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {
    //   this.countriesService.searchCountryByAlphaCode( id )
    //     .subscribe( ( country ) => {
    //       console.log( {country} );

    //     });

    // });
  }




}

// ? Se inyecta en el constructor la dependecia activatedRoute y se usa en el OnInit para poder obtener los datos que se pasen al parametro ID que se definio en las rutas de countries path: "by/:id" entonces si por ejemplo ponemos by/CRI nos devolvera un objeto params con su propiedad id con valor de CRI
// ? En el onInit nos suscribimos de nueva cuenta pero ahora al parametro country que contiene los datos de la api para recibirlo tambien
