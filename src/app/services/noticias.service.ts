import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
private readonly API_URL = environment.Api_url
private readonly API_KEY = environment.api_Key
  constructor(private readonly http:HttpClient) { }
  getNoticias(parametros:any):Observable<any> {
    const params = new HttpParams()
    .set('country',parametros.pais)
    .set('category',parametros.categoria)
    .set('apiKey',this.API_KEY)
    return this.http.get<any>(`${this.API_URL}`,{params});
    //const URL = `${this.API_URL}top-headlines?country=` + parametros.pais +'&category='+parametros.categoria + '&apiKey=dc81d7f9a3d143ce92f789baf46320fb'
  }
}
