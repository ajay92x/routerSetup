import { Component } from '@angular/core';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public url: any = 'https://newmywifiext.com/';
  public isConnect: boolean = false;

  constructor(private domSanitizer: DomSanitizer) {
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.url);
    // console.warn(this.url);
  }

  onStartConnecting(){
    /* const browser = this.iab.create('https://newmywifiext.com/');
    browser.show(); */
    // browser.close()
    // window.open(this.url, '_self');
    this.isConnect = true;
  }

  backToMainPage(){
    this.isConnect = false;
  }

}
