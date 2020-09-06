import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private fb: FormBuilder) {}
  userRegistrationForm = this.fb.group({
    username: [
      '',
      [Validators.required, Validators.pattern('^[a-zA-Z_]{5,20}$')],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '^([\\w\\.]+)@([a-z]{3,10})\\.([a-z]{3,8})(\\.[a-z]{2,8})?$'
        ),
      ],
    ],
    emails: this.fb.array([]),
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W])(?!.*\\s).{8,20}$'
        ),
      ],
    ],
    confirm: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern('^[\\d]{11}$')]],
  });
}
