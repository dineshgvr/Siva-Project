import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchDashboardComponent } from './search-dashboard/search-dashboard.component';

const routes: Routes = [
  { path: '', component: SearchDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})

export class SearchRoutingModule {
  constructor() {
  }
}