import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotDeadlyPage } from './not-deadly.page';

const routes: Routes = [
  {
    path: '',
    component: NotDeadlyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NotDeadlyPage]
})
export class NotDeadlyPageModule {}
