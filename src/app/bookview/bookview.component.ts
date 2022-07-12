import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, take, tap } from 'rxjs';
import { Book } from '../../assets/book';
import { BookdataService } from '../bookdata.service';
import { Genres } from '../definitions';
import { UserrequestService } from '../userrequest.service';

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.css']
})

export class BookviewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private bookService : BookdataService,
    public userService : UserrequestService) { }

  book: Book | undefined;

  genres : Genres[] = [];

  /*
  * Gets book informatino based on the title given in the route.
  */
  ngOnInit(): void {
    const routePath = this.route.snapshot.paramMap;
    // console.log(this.route.snapshot.paramMap);
    const titleFromRoute = routePath.get('book.title');
    if(titleFromRoute){
      this.bookService.getBookByTitle(titleFromRoute).subscribe(
          book => {
            if(book.length > 0){
              this.book = book[0];
            }
          }
        );
    }
  }

  onCheckOutClick(book : Book){
    this.userService.checkoutBook(book);
  }

  onReturnClick(book : Book){
    this.userService.returnBook(book);
  }
}
