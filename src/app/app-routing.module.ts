import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'what-is', loadChildren: './what-is/what-is.module#WhatIsPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'causes', loadChildren: './causes/causes.module#CausesPageModule' },
  { path: 'preventative-m', loadChildren: './preventative-m/preventative-m.module#PreventativeMPageModule' },
  { path: 'symptoms', loadChildren: './symptoms/symptoms.module#SymptomsPageModule' },
  { path: 'deadly', loadChildren: './deadly/deadly.module#DeadlyPageModule' },
  { path: 'us', loadChildren: './us/us.module#UsPageModule' },
  { path: 'not-deadly', loadChildren: './not-deadly/not-deadly.module#NotDeadlyPageModule' },
  { path: 'initial', loadChildren: './initial/initial.module#InitialPageModule' },
  { path: 'vaccination', loadChildren: './vaccination/vaccination.module#VaccinationPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
