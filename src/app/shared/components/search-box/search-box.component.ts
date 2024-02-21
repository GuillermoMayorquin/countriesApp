import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {


  @Input()
  public placeholder: string = "";

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  emitValue(value: string): void{
    this.onValue.emit( value );
  }

}

// ? Se agrega el input para poder agregar el placeholder como atributo de la etiqueta shared-search-box
// ? Se agrega el Output onValue para que emita los valores que se escriban en el searchbox
// ? Tambien se crea el metodo emitValue para que se emita el string que se pase en el
