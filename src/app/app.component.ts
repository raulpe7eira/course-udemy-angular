import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectForm: FormGroup;
  status = ['Stable', 'Critical', 'Finished'];

  constructor() {
    this.projectForm = new FormGroup({
      'name': new FormControl(null, Validators.required, this.forbiddenNames),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Critical')
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
    this.projectForm.reset();
  }

  forbiddenNames(control: FormControl): Promise<{[s: string]: boolean}> | Observable<{[s: string]: boolean}> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
