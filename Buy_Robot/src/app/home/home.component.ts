import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bot-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  isWorking = 'Work!!';
  ngOnInit(): void {
    console.log('Home page loaded');
  }
}
