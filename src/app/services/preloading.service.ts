import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloadingService implements PreloadingStrategy {

  public preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return (route.data && route.data['preload']) ? fn() : of(null);
  }

}
