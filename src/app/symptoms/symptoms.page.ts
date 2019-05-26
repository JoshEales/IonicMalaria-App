import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.page.html',
  styleUrls: ['./symptoms.page.scss'],
})
export class SymptomsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getHomePage(){
    this.router.navigate(['home']);
  }
}
