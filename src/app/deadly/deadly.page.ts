import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deadly',
  templateUrl: './deadly.page.html',
  styleUrls: ['./deadly.page.scss'],
})
export class DeadlyPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getHomePage(){
    this.router.navigate(['home']);
  }
}
