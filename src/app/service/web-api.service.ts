import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Book } from '../interface/book';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  private apiurl = 'http://localhost:3000/books'

  constructor( private httpclient:HttpClient ) { }

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  getAll():Observable<any>{
    return this.httpclient.get(this.apiurl)
  }

  create(data:Book): Observable<any>{
    return this.httpclient.post(this.apiurl, JSON.
      stringify(data), this.httpOption )
  }

  getSingleRecord(id:number): Observable<any>{
   return this.httpclient.get(this.apiurl + '?id=' + id);
  }


  // update(id: number, data: Book): Observable<any>{
  //   return this.httpclient.put(`${this.apiurl}/${id}`, JSON.
  //     stringify(data), this.httpOption)
  // }


  update(id:number, data:Book): Observable<any>{
    console.log('id:', id);
    return this.httpclient.put(this.apiurl + `/${id}`, JSON.
      stringify(data), this.httpOption)

  }

  
  

  deletebook(id:number) {
    return this.httpclient.delete(`${this.apiurl}/${id}`)
  }
  
}
