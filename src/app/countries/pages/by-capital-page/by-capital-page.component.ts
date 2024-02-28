import { Component, } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {}

  searchByCapital(term: string){
    this.isLoading = true;
    this.countriesService.searchByCapital( term ).subscribe(
        (countries) => {
        this.countries = countries;
        this.isLoading = false;
      }
    );
  };
};

// ? Se inyecta el servicio en el constructor y se modifica el metodo searchByCapital para mandar llamar el metodo del mismo nombre que esta en el servicio y se añade el .subscribe para que se reciba la informacion en el network
