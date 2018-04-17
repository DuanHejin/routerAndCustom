import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public numberVal:number = null;

  constructor(
    private router: Router
  ) {

  }

  onClickDetail() {
    this.router.navigate(["/stock", this.numberVal]);
    this.numberVal ++;
  }

}
