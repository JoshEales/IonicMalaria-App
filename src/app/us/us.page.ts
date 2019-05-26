import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-us',
  templateUrl: './us.page.html',
  styleUrls: ['./us.page.scss'],
})
export class UsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

getHomePage(){
  this.router.navigate(['home']);
}
}
