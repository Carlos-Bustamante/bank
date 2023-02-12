import { Component } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // constructor(){}
  constructor(faConfig: FaConfig) {
    //faConfig.defaultPrefix = 'fas';
    faConfig.defaultPrefix = 'fas';
  }
}
