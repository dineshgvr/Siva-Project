import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyDetailsRoutingModule } from './property-details-routing.module';
import { PropertyDetailsComponent } from './property-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablesRoutingModule } from '../tables/tables-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddPropertyDetailsComponent } from './components/add-property-details/add-property-details.component';
import {PropertyStepperComponent} from "./components/property-stepper/property-stepper.component";
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
    declarations: [PropertyDetailsComponent, PropertyStepperComponent, AddPropertyDetailsComponent],
    exports: [
        PropertyDetailsComponent,
        PropertyStepperComponent,
        AddPropertyDetailsComponent
    ],
    imports: [
        CommonModule,
        PropertyDetailsRoutingModule,
        SharedModule,
        NgxDatatableModule,
        MatSelectModule,
        MatTabsModule
    ]
})
export class PropertyDetailsModule { }
