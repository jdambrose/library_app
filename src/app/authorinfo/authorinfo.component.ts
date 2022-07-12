import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, from, tap, filter } from 'rxjs';
import { Author, Book } from 'src/assets/book';
import { BookdataService } from '../bookdata.service';

@Component({
  selector: 'app-authorinfo',
  templateUrl: './authorinfo.component.html',
  styleUrls: ['./authorinfo.component.css']
})
export class AuthorinfoComponent implements OnInit {

  constructor(private routeLink : ActivatedRoute, private bookService: BookdataService) { }

  author: Author | undefined;

  booksByThisAuthor: Book[] = [];

  ngOnInit(): void {

    const routeMap = this.routeLink.snapshot.paramMap;
    const nameToSearch = routeMap.get('author.fullname');

    if(nameToSearch){

      const fullName = nameToSearch?.split("_");
      const firstName = fullName[0];
      const lastName = fullName[1];

      this.bookService.getBooksByAuthor(firstName, lastName).subscribe(
        (book : Book[]) =>{
          console.log('Received in Author Info component ' + book.length);
          this.booksByThisAuthor = book;
          if(book.length > 0){
            this.author = book[0].author;
          }
        },
        err => console.log(err),
        () => console.log('Received unsubscribe')
      )
    }

  }

}
