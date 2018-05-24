import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class MovieDbService {
    // example request: https://api.themoviedb.org/3/movie/76341?api_key={api_key}
    // Jack Reacher example: https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
    // Avatar movie search example: https://api.themoviedb.org/3/search/movie?api_key=e92710572331ea2ed1eb679386cb452c&query=Avatar
    
  constructor(private _http: HttpClient) { }
  
  sidebarURL: string = "https://api.themoviedb.org/3/genre/movie/list?api_key=e92710572331ea2ed1eb679386cb452c&language=en-US"; 
  movieURL: string = "https://api.themoviedb.org/3/search/company?api_key=e92710572331ea2ed1eb679386cb452c&query=";
  
  results: any;
  genreID: number;
  
  getSidebarData(){
      console.log("sidebarURL request", (this.sidebarURL));
      let sidebarURLRequest = this.sidebarURL; 
      return this._http.get(sidebarURLRequest); 
  }
  
  getGenre(){}
  
  genreMovieURL: string = "https://api.themoviedb.org/3/discover/movie?api_key=e92710572331ea2ed1eb679386cb452c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="
  currentGenre: any;
  
  getMoviesByGenre(){
      let genreURLRequest = this.genreMovieURL + this.genreID; 
      console.log("getMoviesByGenre", genreURLRequest);
      this._http.get(genreURLRequest).subscribe( data => {
          this.currentGenre = data
          console.log("currentGenre", this.currentGenre)
      })
  }
  
  url: string = "https://api.themoviedb.org/3/search/movie?";
  apiKey: string = "api_key=e92710572331ea2ed1eb679386cb452c";
  query: string = "&query=";
   
  getData(movieSearch){
        console.log("url request", (this.url + this.apiKey + this.query + movieSearch));
        let urlRequest = this.url + this.apiKey + this.query + movieSearch; 
        return this._http.get(urlRequest);
  }
        
}


