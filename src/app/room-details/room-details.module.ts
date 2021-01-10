import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomDetailsRoutingModule } from './room-details-routing.module';
import { RoomDetailsComponent } from './room-details.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [RoomDetailsComponent],
  imports: [
    CommonModule,
    RoomDetailsRoutingModule,
    SharedModule, 
    ReactiveFormsModule,
    NgxDatatableModule
  ]
})
export class RoomDetailsModule { }
