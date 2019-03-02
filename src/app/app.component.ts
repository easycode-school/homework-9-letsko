import { Component } from '@angular/core';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'homework9';
  public creatingTime: Date = new Date();

  public users: User[] = [
    {
      name: 'Dasha',
      age: 26
    },
    {
      name: 'Denis',
      age: 29
    },
    {
      name: 'Artsiom',
      age: 27
    },
    {
      name: 'Kirill',
      age: 26
    },
    {
      name: 'Kostya',
      age: 17
    }
  ];
}
