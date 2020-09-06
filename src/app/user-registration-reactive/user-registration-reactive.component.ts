import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-user-registration-reactive',
  templateUrl: './user-registration-reactive.component.html',
  styleUrls: ['./user-registration-reactive.component.css'],
})
export class UserRegistrationReactiveComponent implements OnInit {
  form: FormGroup;
  passwordMatch: boolean;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.form = this.userService.userRegistrationForm;
  }
  get emails() {
    return this.form.get('emails') as FormArray;
  }
  addEmail() {
    this.emails.push(
      new FormControl('', [
        Validators.pattern(
          '^([\\w\\.]+)@([a-z]{3,10})\\.([a-z]{3,8})(\\.[a-z]{2,8})?$'
        ),
      ])
    );
    if (this.emails.length > 2) {
      this.emails.removeAt(1);
    }
    console.log(this.emails);
  }
  submitForm(form) {
    console.log(form.value);
  }
  resetForm() {
    this.form.reset();
  }
  comparePassword(event) {
    let password = this.form.get('password').value;
    let confirm = event.target.value;
    if (password !== '' && confirm !== '') {
      if (password !== confirm) {
        this.passwordMatch = true;
      } else {
        this.passwordMatch = false;
      }
    }
  }
}
