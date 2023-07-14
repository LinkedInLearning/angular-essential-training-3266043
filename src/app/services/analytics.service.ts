import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  public track(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

}
