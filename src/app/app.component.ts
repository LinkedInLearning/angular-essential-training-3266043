import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public appFooter = environment.appFooter;

  constructor(
    public messageService: MessageService
  ) { }
}
