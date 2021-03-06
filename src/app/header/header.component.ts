import { Component, OnInit } from '@angular/core';
import { MovieDbService} from '../movie-db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppUserService } from '../app-user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(public _movie: MovieDbService, private _router: Router, public _appUser: AppUserService) { 
    
  }

  ngOnInit() {
  }

  query: string; 

  getMovieSearch(query){
        this._router.navigate(['main']); 
        this._movie.getMovieData(query); 
        this.query = "";
    }
}
  
