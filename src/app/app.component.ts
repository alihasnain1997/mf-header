import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'mf-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mf-header';

  message: any = 'New message';

  ngOnInit() {

    localStorage.setItem('dataSource', 'From Header');


  }


  deliverMessage(target) {

    console.log("delivering message", this.message)
    target.dispatchEvent(new CustomEvent('customEvent', {
      detail: {
        message: this.message,
        data: { name: 'header' }
      },
      bubbles: true
    }));
  }
}
