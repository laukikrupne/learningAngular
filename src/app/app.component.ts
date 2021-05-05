import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'any value';

  movie = {
    title: 'Spider-Man',
    releaseDate: new Date(),
    price: 1999.99
  }

  duplicateNumber(n: number){
    return n*2;
  }

  handleRating(rate: number){
    alert(`The user selected ${rate}`);
  }
  display = true;
  moviesInTheaters;

  ngOnInit(): void{
    this.moviesInTheaters=[{
      title: 'Spider-Man',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    },{
      title: 'Batman',
      releaseDate: new Date(),
      price: 1999.99
    }];
  }
  
 
}
