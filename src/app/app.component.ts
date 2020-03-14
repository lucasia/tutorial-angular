import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*
interface data {
  id:string,
  content:string;
}
*/

export class AppComponent {
  title = 'Lucasia Tutorial';
  // tslint:disable-next-line:ban-types
  data: Object = {
    id: undefined
  };
  constructor(private http: HttpClient) {
    http.get('resource').subscribe(data => this.data = data);
  }
}
