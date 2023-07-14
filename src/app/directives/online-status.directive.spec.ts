import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { OnlineStatusDirective } from './online-status.directive';

describe('OnlineStatusDirective', () => {
  let directive: OnlineStatusDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OnlineStatusDirective,
        { provide: ElementRef<HTMLAnchorElement>, useValue: jasmine.createSpy('ElementRefSpy') }
      ]
    });

    directive = TestBed.inject(OnlineStatusDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
