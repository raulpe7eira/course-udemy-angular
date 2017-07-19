import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const config = {
      apiKey: 'AIzaSyBUEl4GdeDalk2I_iaM9Ur0VDRQ0LYBOpM',
      authDomain: 'udemy-ng-recipe-book-2d0cc.firebaseapp.com'
    };
    firebase.initializeApp(config);
  }
}
