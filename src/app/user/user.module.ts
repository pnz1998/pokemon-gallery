import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    UserRoutingModule
  ]
})
export class UserModule { }
