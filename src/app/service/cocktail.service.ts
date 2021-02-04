import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const cocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<any>{
    return this.http.get(cocktailURL);
  }

  fetchByAlcoholic(alholicValue: string): Observable<any>{
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a='+alholicValue);
  }
}
