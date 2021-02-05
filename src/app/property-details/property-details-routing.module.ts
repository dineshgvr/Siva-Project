import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyDetailsComponent } from './property-details.component';
import {PropertyStepperComponent} from "./components/property-stepper/property-stepper.component";
import {AddPropertyDetailsComponent} from "./components/add-property-details/add-property-details.component";

const routes: Routes = [
      { path: '', component: PropertyDetailsComponent },
      { path: 'property', component: PropertyStepperComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyDetailsRoutingModule { }
