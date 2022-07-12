import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs';
import {Book} from '../../assets/book';
import { BookdataService } from '../bookdata.service';
import { Genres } from '../definitions';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})

export class BooklistComponent{

  constructor(private bookService : BookdataService){ }

  booksToDisplay$ !: Observable<Book[]>;

  genres: Genres[] = Object.values(Genres);

  // Primitives must be wrapped with an object to show
  state = {
    showGenreSearch: false,
    currentSearch: "",
    genreList: new Array<Genres>
  }

  ngOnInit(): void {
    this.filter('');
  }

  onSearchChange(search: string) : void {
    this.filter(search);
  }

  filter(filter: string) : void {
    this.state.currentSearch = filter;
    this.booksToDisplay$ = this.bookService.getBooksFromSearch(this.state.currentSearch, this.state.genreList);
  }

  toggleShowGenre(){
      this.state.showGenreSearch = !this.state.showGenreSearch;
      // console.log('Toggling genre search on ' + this.state.showGenreSearch);
  }

  onChange(id:Genres){

    // Removes or adds genre depending on whether it exists or not
    const index = this.state.genreList.indexOf(id);
    if(index == -1){
      this.state.genreList.push(id);
    }else{
      this.state.genreList.splice(index, 1);
    }

    this.booksToDisplay$ = this.bookService.getBooksFromSearch(this.state.currentSearch, this.state.genreList);
  }

}
