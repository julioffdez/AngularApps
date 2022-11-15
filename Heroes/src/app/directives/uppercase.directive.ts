import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {

  constructor(private el: ElementRef) { 
  }
  
  @HostListener('input', ['$event']) onInputChange($event) {
    this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
 }

}
