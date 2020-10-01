import { Component, OnInit} from '@angular/core';
import { AlertService, AccountService } from '../../services/auth';
import { NgProgress } from "@ngx-progressbar/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(  
    private router: Router,
    public authService: AccountService,
    private alertService: AlertService) { 
  
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.authService.currentUser = null;
    this.authService.decodedToken = null;
    this.alertService.success("Logged Out");
    this.router.navigate(['/login']);
  }

}
