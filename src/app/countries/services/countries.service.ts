import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, of } from 'rxjs';

import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
  private _apiUrl: string = "https://restcountries.com/v3.1"


  constructor(private http: HttpClient) { }

  searchByCapital(term: string): Observable<Country[]>{

    const url = `${this._apiUrl}/capital/${ term }`

    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    )
   };

   searchByCountry(term: string) {
  const url = `${this._apiUrl}/name/${ term }`
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    )
   };

   searchByRegion(term: string) {
    const url = `${this._apiUrl}/region/${ term }`
      return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      )
     };


}

// ? Aqui se crea el servicio y se crea el metodo searchByCapital que es un Observable para consumir la api y retorna el url
// ? Se crea el .pipe con el catch error para regresar un arreglo vacio cuando se tenga un error en la introduccion de datos
// ? Se crean los otros dos servicios para pais y region para consumir la API
