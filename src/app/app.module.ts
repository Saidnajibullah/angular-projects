import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserService } from './services/user.service';
export function getUserInfo(userService: UserService) {
  return (): Promise<any> => userService.getUserInfo();
}

@NgModule({
  declarations: [AppComponent, UserInfoComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [
    Title,
    UserService,
    {
      provide: APP_INITIALIZER,
      useFactory: getUserInfo,
      deps: [UserService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
