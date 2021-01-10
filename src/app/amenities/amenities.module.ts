import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmenitiesRoutingModule } from './amenities-routing.module';
import { AmenitiesComponent } from './amenities.component';
import { SharedModule } from '../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [AmenitiesComponent],
  imports: [
    CommonModule,
    AmenitiesRoutingModule,
    SharedModule,
    NgxDatatableModule,
    MatSelectModule,
  ]
})
export class AmenitiesModule { 

}
