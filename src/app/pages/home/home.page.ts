import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  slideOpts: any = {
    slidesPerView: 2,
    spaceBetween: -5
  }

}
