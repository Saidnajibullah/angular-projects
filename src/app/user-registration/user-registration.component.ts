import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent implements OnInit {
  user: User;
  passwordMatch: boolean;
  constructor() {}

  ngOnInit(): void {
    this.user = new User('', '', '', '', '');
  }
  submitForm() {
    console.log(this.user);
  }
  reset() {
    this.user = new User('', '', '', '', '');
  }
  comparePassword(event) {
    let password = this.user.password;
    let confirm = this.user.confirm;
    if (password !== '' && confirm !== '') {
      if (password === confirm) {
        this.passwordMatch = false;
      } else {
        this.passwordMatch = true;
      }
    }
  }
}
