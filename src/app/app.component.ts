import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allowClean: Boolean = false;
  username: String = '';

  getAllowClean(): Boolean {
    return !this.username;
  }

  onReset(): void {
    this.username = '';
  }
}
