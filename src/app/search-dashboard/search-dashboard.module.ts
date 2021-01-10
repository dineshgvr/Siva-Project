import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchRoomComponent } from './search-room/search-room.component';
import { ViewRoomComponent } from './view-room/view-room.component';
import { SearchDashboardComponent } from './search-dashboard/search-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SearchRoomComponent,
    ViewRoomComponent,
    SearchDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchDashboardModule {
  constructor() {
  }
 }
