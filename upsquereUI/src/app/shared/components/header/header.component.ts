import { Component, OnInit, Output, EventEmitter, ElementRef} from '@angular/core';
import {Location} from '@angular/common';
import { ROUTES } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private listTitles: any[];
  location: Location;
  private toogleButton: any;
  private sidebarVisible: boolean;

  constructor(location: Location, private element: ElementRef) { 
    this.location = location;
    this.sidebarVisible = false;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    const navbar: HTMLElement = this.element.nativeElement;
    this.toogleButton = navbar.getElementsByClassName('navbar-toogle')[0];
  }

  sidebarOpen() {
    const toogleButton = this.toogleButton;
    const body = document.getElementsByTagName('body')[0];
    setTimeout(function() {
      toogleButton.classList.add('toogled');
    }, 500);
    body.classList.add('nav-open');

    this.sidebarVisible = true;
  };

  sidebarClose() {
    const body = document.getElementsByTagName('body')[0];
    this.toogleButton.classList.remove('toogled');
    this.sidebarVisible = false;
    body.classList.remove('nav-open');
  };

  sidebarToggle() {
    // if(!this.sidebarVisible)
    if(this.sidebarVisible === false){
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  };

  getTitle() {
    var title = this.location.prepareExternalUrl(this.location.path());
    if(title.charAt(0) === '#'){
      title = title.slice(1);
    }

    for(var item = 0; item< this.listTitles.length; item++) {
      if(this.listTitles[item].path === title){
        return this.listTitles[item].title;
      }
    }

    return 'Dashboard';
  }
}
