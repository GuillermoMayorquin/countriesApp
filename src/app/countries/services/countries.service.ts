import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
  private _apiUrl: string = "https://restcountries.com/v3.1"


  constructor(private http: HttpClient) { }

  searchByCapital(term: string): Observable<Country[]>{
    const url = `${this._apiUrl}/capital${ term }`
    return this.http.get<Country[]>(url)

   }


}

// ? Aqui se crea el servicio y se crea el metodo searchByCapital que es un Observable para consumir la api y retorna el url
