import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

constructor(private router: Router) {} 
  
getAboutPage() {
  this.router.navigate(['about']);
}

getCausesPage(){
  this.router.navigate(['causes']);
}

getPmPage(){
  this.router.navigate(['preventative-m']);
}

getSymptomsPage(){
  this.router.navigate(['symptoms']);
}

getKillTypePage(){
  this.router.navigate(['deadly']);
}

getUsPage(){
  this.router.navigate(['us']);
}

getNoKillTypePage(){
  this.router.navigate(['not-deadly']);
}

getInitiaCausePage(){
  this.router.navigate(['initial']);
}

getVacPage(){
  this.router.navigate(['vaccination']);
}
}
