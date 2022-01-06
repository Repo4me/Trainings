import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective implements OnInit{
// Custome directive. Applying this on topic.component.hmtl on <div class='topic' appBorder>

  @Input() category : string;

  constructor(private element : ElementRef,
    private renderer : Renderer2) { 
    console.log('border directive called');
    this.renderer.setStyle(element.nativeElement, 'border', '2px solid black');
  }

  ngOnInit() {
    if(this.category === 'oops') {
      this.renderer.setStyle(this.element.nativeElement, 'border', '2px solid green');
    }
    else if(this.category === 'lang') {
      this.renderer.setStyle(this.element.nativeElement, 'border', '2px solid blue');
    }
    else if(this.category === 'web') {
      this.renderer.setStyle(this.element.nativeElement, 'border', '2px solid black');
    }
  }

  @HostListener("mouseover")
  mouseover()
  {
   this.renderer.setStyle(this.element.nativeElement,'opacity','0.5')
  }
  @HostListener("mouseout")
  mouseout()
  {
   this.renderer.setStyle(this.element.nativeElement,'opacity','1')
  }
}
