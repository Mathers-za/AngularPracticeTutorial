import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SiteHeaderComponent } from './site-header/site-header.component';

@Component({
  selector: 'bot-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CatalogComponent, SiteHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = { name: 'Buy_Robot', yearMade: '2017', age: 29 };
  onMouseOver() {
    this.title.name = 'Good job';
  }
  onMouseLeave() {
    this.title.name = 'By_robot';
  }
}
