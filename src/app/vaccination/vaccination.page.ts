import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.page.html',
  styleUrls: ['./vaccination.page.scss'],
})
export class VaccinationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getHomePage(){
    this.router.navigate(['home']);
  }
}
