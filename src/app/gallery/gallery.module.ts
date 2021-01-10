import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { SharedModule } from '../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SharedModule,
    MatSelectModule
    
  ]
})
export class GalleryModule { }
