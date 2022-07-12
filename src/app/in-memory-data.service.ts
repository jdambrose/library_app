import { HttpRequest, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions, STATUS  } from 'angular-in-memory-web-api';
import { Observable, of } from 'rxjs';
import { Book, BOOKS } from '../assets/book'
import { Genres } from './definitions';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {BOOKS};
  }

  post(requestInfo : RequestInfo) : Observable<any> {

    let reqBody = JSON.parse(requestInfo.utils.getJsonBody(requestInfo.req));

    const firstname:string = reqBody['firstname'];
    const lastname:string = reqBody['lastname'];
    const title: string = 'title' in reqBody ? reqBody['title'] : "";
    const genres: Genres[] = 'genres' in reqBody ? reqBody['genres'] : [];

    console.log(`Title: ${title}`);

    if(firstname && lastname){
      return this.authorSearch(requestInfo, firstname, lastname);
    } else {
      return this.titleSearch(requestInfo, title, genres);
    }

  }

  private authorSearch(requestInfo : RequestInfo, firstname: string, lastname: string) : Observable<any>{
    const booksByAuthor : Book[] = [];

    BOOKS.forEach((book =>{
          if(book.author.firstname == firstname && book.author.lastname == lastname){
            booksByAuthor.push(book);
          }
        }));

    return requestInfo.utils.createResponse$(() : ResponseOptions =>  {
      const data = booksByAuthor;
      return {body: data, status: STATUS.OK};
    })
  }

  private titleSearch(requestInfo : RequestInfo, title: string, genres: Genres[]) : Observable<any>{
    const booksBySearch : Book[] = [];

    BOOKS.forEach((book =>{
          if(book.title.includes(title) && genres.every((genre : Genres) => book.genre.includes(genre))){
            booksBySearch.push(book);
          }
        }));

    return requestInfo.utils.createResponse$(() : ResponseOptions =>  {
      const data = booksBySearch;
      return {body: data, status: STATUS.OK};
    })
  }

}
