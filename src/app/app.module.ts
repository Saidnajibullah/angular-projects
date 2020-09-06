import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserRegistrationReactiveComponent } from './user-registration-reactive/user-registration-reactive.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserRegistrationReactiveComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
