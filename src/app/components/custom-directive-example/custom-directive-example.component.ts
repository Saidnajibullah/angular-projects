import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive-example',
  templateUrl: './custom-directive-example.component.html',
  styleUrls: ['./custom-directive-example.component.css']
})
export class CustomDirectiveExampleComponent implements OnInit {

  footerData: any;

  constructor() { }

  ngOnInit() {
    this.footerData = {
      content: {
        title: 'Footer Title',
        text: 'Footer text'
      },
      link1: {
        title: 'Link1',
        links: [
          {text: 'link 1', href: 'www.google.com'},
          {text: 'link 2', href: 'www.google.com'},
          {text: 'link 3', href: 'www.google.com'},
          {text: 'link 4', href: 'www.google.com'},
        ],
      },
      link2: {
        title: 'Link2',
        links: [
          {text: 'link 5', href: 'www.google.com'},
          {text: 'link 6', href: 'www.google.com'},
          {text: 'link 7', href: 'www.google.com'},
          {text: 'link 8', href: 'www.google.com'},
        ],
      },
      copyright: {
        text: 'Copy Righ Policy',
        href: 'www.google.com'
      }
    }
  }

}
