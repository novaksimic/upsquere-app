import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router,
              private accountService: AccountService) {

                if(this.accountService.userValue){
                  this.router.navigate['/'];
                }
              }

  ngOnInit(): void {
  }

}
