import { AuthorinfoComponent } from "src/app/authorinfo/authorinfo.component";
import { Genres } from "src/app/definitions";

export interface Book{
  title:string;
  author:Author;
  genre:Genres[];
  synopsis?:string
}

export interface Author{
  firstname:string;
  lastname:string;
  about?:string
}

const jkRowling = {
  firstname:"JK",
  lastname:"Rowling",
  about:"JK Rowling wrote the Harry Potter series."
};

const andyWeir = {
  firstname:"Andy",
  lastname:"Weir",
  about:"Andy Weir wrote some cool scifi books."
};

export const BOOKS = [
{
  title:"Harry Potter and the Sorcerer's Stone",
  genre:[Genres.FANTASY,Genres.YOUNG_ADULT],
  author:jkRowling,
  synopsis:"A book about a wizard."
},
{
  title:"Harry Potter and the Chamber of Secrets",
  genre:[Genres.FANTASY,Genres.YOUNG_ADULT],
  author:jkRowling,
  synopsis:"A sequel to that one book about that wizard."
},
{
  title:"Harry Potter and the Prisoner of Azkaban",
  genre:[Genres.FANTASY,Genres.YOUNG_ADULT],
  author:jkRowling,
  synopsis:"The third book about that wizard."
},
{
  title:"Harry Potter and the Goblet of Fire",
  genre:[Genres.FANTASY,Genres.YOUNG_ADULT],
  author:jkRowling,
  synopsis:"The forth book about that wizard."
},
{
  title:"Harry Potter and the Order of the Pheonix",
  genre:[Genres.FANTASY,Genres.YOUNG_ADULT],
  author:jkRowling,
  synopsis:"The fifth book about that wizard."
},
{
  title:"Harry Potter and the Half-Blood Prince",
  genre:[Genres.FANTASY,Genres.YOUNG_ADULT],
  author:jkRowling,
  synopsis:"A sixth book about that wizard."
},
{
  title:"Harry Potter and the Deathly Hallows",
  genre:[Genres.FANTASY,Genres.YOUNG_ADULT],
  author:jkRowling,
  synopsis:"The final book about the wizard."
},{
  title:"The Martian",
  genre:[Genres.SCIFI],
  author:andyWeir,
  synopsis:"A man gets stuck on Mars."
},{
  title:"This Book Has No Synopsis",
  author:{
    firstname: "No",
    lastname:"About"
  },
  genre : new Array<Genres>,
}

];
