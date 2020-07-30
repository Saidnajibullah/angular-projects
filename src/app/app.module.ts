import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomDirectiveExampleComponent } from './components/custom-directive-example/custom-directive-example.component';
import { FooterDirective } from './directives/footer.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveExampleComponent,
    FooterDirective
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
