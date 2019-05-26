import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-deadly',
  templateUrl: './not-deadly.page.html',
  styleUrls: ['./not-deadly.page.scss'],
})
export class NotDeadlyPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getHomePage(){
    this.router.navigate(['home']);
  }
}
