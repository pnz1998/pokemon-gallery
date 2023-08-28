import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
