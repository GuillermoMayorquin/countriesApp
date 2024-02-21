import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [`
    img{
      width: 25px;
    }
  `]
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];

}


// ? Se crea el input para que se envien los paises
// ? Se agrega en los estilos un tamaño diferente para que las banderas no se vean tan grandes
