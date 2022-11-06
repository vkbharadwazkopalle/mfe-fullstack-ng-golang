import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'micro-frontends-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public routes: { route: string; name: string; }[] = [];

  ngOnInit() {

    this.routes = [
      { route: '/', name: 'Home' },
      { route: 'remote1', name: 'Blogger' },
      { route: 'remote2', name: 'Sudoku' },
      { route: 'remote3', name: 'Bricks & Balls' }
    ];

  }

}
