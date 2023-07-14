import { AfterContentInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOnlineStatus]',
  inputs: ['appOnlineStatus'],
  outputs: [],
  providers: [],
  standalone: true
})
export class OnlineStatusDirective implements AfterContentInit {
  public appOnlineStatus: boolean | undefined;

  constructor(
    private element: ElementRef<HTMLAnchorElement>
  ) { }

  public ngAfterContentInit(): void {
    if (this.appOnlineStatus === true) {
      this.element.nativeElement.innerHTML += '<i class="bi bi-lightning-fill"></i>';
    }
  }

}
