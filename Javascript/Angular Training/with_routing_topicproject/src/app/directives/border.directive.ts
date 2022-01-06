import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective implements OnInit{

  @Input() category:string;

  constructor(private ele:ElementRef, 
    private renderer:Renderer2) {
      //console.log('border directive called')
      this.renderer.setStyle(ele.nativeElement, 
        'border','2px solid white');
   }
   ngOnInit()
   {
     if(this.category === 'oops')
     {
       this.renderer.setStyle(this.ele.nativeElement,
        'border','4px solid green')
     }
     else if(this.category === 'lang')
     {
       this.renderer.setStyle(this.ele.nativeElement,
        'border','4px solid blue')
     }
     else if(this.category === 'web')
     {
       this.renderer.setStyle(this.ele.nativeElement,'border','4px solid black')
     }
   }

   @HostListener("mouseover")
   mouseover()
   {
    this.renderer.setStyle(this.ele.nativeElement,'opacity','0.5')
   }

   @HostListener("mouseout")
   mouseout()
   {
    this.renderer.setStyle(this.ele.nativeElement,'opacity','1')
   }
}
