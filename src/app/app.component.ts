import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  chooseFormFlag: boolean = false;
  formType: string;
  constructor() {
    this.formType = 'Reactive Form';
  }
  title = 'angular-forms-project';
  switchFormType(event) {
    let btnText = event.target.innerText;
    if (btnText.includes('Template Driven')) {
      this.formType = 'Reactive Form';
    } else {
      this.formType = 'Template Driven';
    }
    this.chooseFormFlag = !this.chooseFormFlag;
  }
}
