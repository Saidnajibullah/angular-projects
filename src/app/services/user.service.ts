import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isUserInfoLoaded: boolean;
  fistName: string;
  lastName: string;
  constructor() {}

  getUserInfo() {
    return new Promise((resolve, reject) => {
      console.log('getUserInfo of UserService was called');
      setTimeout(() => {
        this.fistName = 'Mohammad';
        this.lastName = 'Abdullah';
        this.isUserInfoLoaded = true;
        console.log('User info was loaded');
        resolve();
      }, 6000);
    });
  }
}
