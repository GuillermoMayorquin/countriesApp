import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = "";

}

// ? Se agrega el input para poder agregar el placeholder como atributo de la etiqueta shared-search-box
