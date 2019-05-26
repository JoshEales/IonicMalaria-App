import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preventative-m',
  templateUrl: './preventative-m.page.html',
  styleUrls: ['./preventative-m.page.scss'],
})
export class PreventativeMPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getHomePage(){
    this.router.navigate(['home']);
  }
}
