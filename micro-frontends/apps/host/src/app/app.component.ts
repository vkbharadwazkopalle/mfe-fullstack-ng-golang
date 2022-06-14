import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'micro-frontends-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  links: { name: string; route: string; }[] = [];

  ngOnInit(): void {
    
    this.links = [
      { name: 'Projects', route: 'remote1' },
      { name: 'Remote 2', route: 'remote2' },
      { name: 'Remote 3', route: 'remote3' }
    ];

  }

}
