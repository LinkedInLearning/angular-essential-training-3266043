import { HttpClient } from '@angular/common/http';
import { Injectable, computed, effect, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Message } from '../interfaces/message';
import { AnalyticsService } from './analytics.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public unread = signal<Message[]>([]);

  public count = computed(() => {
    return this.unread().length;
  });

  constructor(
    private analytics: AnalyticsService,
    private http: HttpClient,
  ) {
    effect(() => {
      this.analytics.track('MESSAGE_COUNT', this.count().toString());
    });

    this.http
      .get<Message[]>('/assets/mocks/messages.json')
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: items => this.unread.set(items)
      });
  }

  public delete(selected: Message) {
    this.unread.update(items => {
      return items.filter((item) => item.id !== selected.id);
    });
  }
}
