import { Injectable, Input } from '@angular/core';
import {Author, Book, BOOKS} from '../assets/book';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, of, filter } from 'rxjs';
import { AuthorinfoComponent } from './authorinfo/authorinfo.component';
import { defaultThrottleConfig } from 'rxjs/internal/operators/throttle';
import { Genres } from './definitions';
@Injectable({
  providedIn: 'root'
})
export class BookdataService {

  constructor(private http: HttpClient) { }

  private bookURL = 'api/BOOKS'; // URL to web api

  public getBooks(): Observable<Book[]>{
    const books = this.http.get<Book[]>(this.bookURL);
    return books;
  }

  public getBooksFromSearch(search: string = "", genres: Genres[] = []): Observable<Book[]>{

    const query = {
      title:search,
      genres:genres
    };

    const body = JSON.stringify(query);
    return this.http.post<Book[]>(this.bookURL, body);

  }

  public getBookByTitle(title: string) : Observable<Book[]> {
    console.log("Requesting URL for: " + `${this.bookURL}/?title=${title}`);
    return this.http.get<Book[]>(`${this.bookURL}/?title=${title}`);
  }

  public getBooksByAuthor(firstname: string, lastname: string) : Observable<Book[]>{

     const query = {
       firstname:firstname,
        lastname:lastname,
     };

     const body = JSON.stringify(query);
     return this.http.post<Book[]>(this.bookURL, body);
  }
}
