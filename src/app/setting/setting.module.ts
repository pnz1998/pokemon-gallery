import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
