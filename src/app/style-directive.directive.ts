import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyleDirective]'
})
export class StyleDirectiveDirective {
element="";
  constructor(private ele: ElementRef) {

     console.log(ele);
     ele.nativeElement.style.color=="green";
 
    

  }

  ngOnIit():void{



  

  }

}


