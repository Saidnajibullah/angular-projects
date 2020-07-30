import { Directive, ElementRef, Renderer2, HostListener, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[appFooter]'
})
export class FooterDirective implements OnInit {
  //Boostrap 4 is needed for this directive to work properly.

  //data should be an object with these three properties:
  //1. content = {title: string, text: string}.
  //2. link1 = {title: string, links: [{text: string' href: string}]}. 
  //3. link2 = {title: string, links: [{text: string' href: string}]}. 
  //4. copyright = {text: string, href: string}. 
  @Input('appFooter') data: object;
  constructor(private elementRef: ElementRef, 
    private renderer: Renderer2) {}
    ngOnInit(){
      //setting the footer background color
      this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', '#5999ff');
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
      this.renderer.setStyle(this.elementRef.nativeElement, 'paddingTop', '12px');
      this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'absolute');
      this.renderer.setStyle(this.elementRef.nativeElement, 'bottom', '0px');
      this.renderer.setStyle(this.elementRef.nativeElement, 'width', '100%');


      //creating the container div and adding bootstrap classes
      const container = this.renderer.createElement('div');
      this.renderer.addClass(container, 'container-fluid');
      this.renderer.addClass(container, 'text-center');
      this.renderer.appendChild(this.elementRef.nativeElement, container);

      //creating the row div and adding bootstrap classes;
      const row = this.renderer.createElement('div');
      this.renderer.addClass(row, 'row');
      this.renderer.appendChild(container, row);
      
      //creating the footer content column
      const footerContent = this.renderer.createElement('div');
      this.renderer.addClass(footerContent, 'col-sm-12');
      this.renderer.addClass(footerContent, 'col-md-4');
      this.renderer.appendChild(row, footerContent);

      //creating footer content title
      const contentTitle = this.renderer.createElement('h5');
      this.renderer.addClass(contentTitle, 'text-uppercase');
      const title1 = this.renderer.createText(this.data['content']['title']);
      this.renderer.appendChild(contentTitle, title1);
      this.renderer.appendChild(footerContent, contentTitle);

      //creating footer conten text
      const contentText = this.renderer.createElement('p');
      const text1 = this.renderer.createText(this.data['content']['text']);
      this.renderer.appendChild(contentText, text1);
      this.renderer.appendChild(footerContent, contentText);
      //creating first link column
      this.creatLinkColums(row, this.data['link1']);
      //creating second link column
      this.creatLinkColums(row, this.data['link2']);

      
      //creating the footer copy right section
      const copyRightDiv = this.renderer.createElement('div');
      //creating hr
      const hr = this.renderer.createElement('hr');
      this.renderer.appendChild(copyRightDiv, hr); 
      this.renderer.setStyle(copyRightDiv, 'paddingBottom', '20px');
      this.renderer.addClass(copyRightDiv, 'footer-copyright');
      this.renderer.addClass(copyRightDiv, 'text-center');
      this.renderer.addClass(copyRightDiv, 'col-sm-12');
      this.renderer.appendChild(row, copyRightDiv);
      const copyRightLink = this.renderer.createElement('a');
      this.renderer.appendChild(copyRightDiv, copyRightLink);
      this.renderer.setAttribute(copyRightLink, 'href', this.data['copyright']['href']);
      const text2 = this.renderer.createText(this.data['copyright']['text']);
      this.renderer.appendChild(copyRightLink, text2);
      this.renderer.setStyle(copyRightLink, 'color', 'white');
    }
    creatLinkColums(row, data){
       //creating the first link column
       const firstLink = this.renderer.createElement('div');
       this.renderer.addClass(firstLink, 'col-sm-12');
       this.renderer.addClass(firstLink, 'col-md-4');
       this.renderer.appendChild(row, firstLink);
 
       //creating first link title
       const firstLinkTitle = this.renderer.createElement('h5');
       this.renderer.addClass(firstLinkTitle, 'text-uppercase');
       const title2 = this.renderer.createText(data['title']);
       this.renderer.appendChild(firstLinkTitle, title2);
       this.renderer.appendChild(firstLink, firstLinkTitle);
 
       //creating links
       const ul = this.renderer.createElement('ul');
       this.renderer.appendChild(firstLink, ul);
       this.renderer.setStyle(ul, 'listStyle', 'none')
       for(let i = 0; i < data['links'].length; i++){
         let linkData = data['links'][i];
         let li = this.renderer.createElement('li');
         this.renderer.appendChild(ul, li);
         let a = this.renderer.createElement('a');
         this.renderer.setAttribute(a, 'href', linkData['href']);
         let text = this.renderer.createText(linkData['text']);
         this.renderer.appendChild(a, text);
         this.renderer.setStyle(a, 'color', 'white');
         this.renderer.appendChild(li, a);
 
       }
 
    }

}
