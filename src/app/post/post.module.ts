import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';



@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PostRoutingModule
  ]
})
export class PostModule { }
