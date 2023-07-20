import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appOnlineStatus]',
  providers: [],
  standalone: true
})
export class OnlineStatusDirective implements AfterContentInit {
  @Input() public appOnlineStatus: boolean | undefined;

  constructor(
    private element: ElementRef<HTMLAnchorElement>
  ) { }

  public ngAfterContentInit(): void {
    if (this.appOnlineStatus === true) {
      this.element.nativeElement.innerHTML += '<i class="bi bi-lightning-fill"></i>';
    }
  }

}
