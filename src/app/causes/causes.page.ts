import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.page.html',
  styleUrls: ['./causes.page.scss'],
})
export class CausesPage implements OnInit {
 

  constructor(private router: Router) { }

  ngOnInit() {
  }


  getHomePage(){
    this.router.navigate(['home']);
  }
}
