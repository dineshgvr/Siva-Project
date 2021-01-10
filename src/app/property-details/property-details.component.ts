import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { PropertyDetailsService } from '../services/property-details/property-details.service';
import { SingInService } from '../services/signIn/sing-in.service';
import {AuthService} from "../core/service/auth.service";

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
  public countryList: any[] = ['USA', 'India', 'UK', 'Canada'];
  public propertyForm: FormGroup;
  public isAddOrView = 'Add';
  public selectedPropertyId: string ;

  @ViewChild('roleTemplate', { static: true }) roleTemplate: TemplateRef<any>;
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  rows = [];
  selectedRowData: selectRowInterface;
  newUserImg = 'assets/images/user/user1.jpg';
  data = [];
  filteredData = [];
  editForm: FormGroup;
  register: FormGroup;
  selectedOption: string;
  columns = [
    { name: 'Property ID' },
    { name: 'Property Name' },
    { name: 'Guest' },
    { name: 'BedRoom' },
    { name: 'beds' },
    { name: 'Bath Room' },
    { name: 'Country' },
    { name: 'State' },
    { name: 'Action' }
  ];
  genders = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
  ];
  public foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  @ViewChild(DatatableComponent, { static: false }) table2: DatatableComponent;
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private modalService: NgbModal,
    private propertyDetailsService: PropertyDetailsService,
    private signInService: SingInService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.propertyForm = this.formBuilder.group({
        propertyName : new FormControl('', [Validators.required]),
        guest: new FormControl('', [Validators.required]),
        bedRoom: new FormControl('', [Validators.required]),
        beds: new FormControl(''),
        bathRoom: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        propertyOwner: new FormControl(this.authService.currentUserValue.email)
    });
  }

  loadGetHotelProperty(): void {
    const currentUserEmail: string = this.authService.currentUserValue.email;
    if (currentUserEmail) {
      this.propertyDetailsService.getHotels(currentUserEmail).subscribe((response: any) => {
        this.data = response;
        this.filteredData = response;
      });
    }
  }

  ngOnInit() {
    this.signInService.loggedInUserObs$.subscribe((response: any) => {
    this.loadGetHotelProperty();
    });
  }

  editRow(row, rowIndex, content) {
    this.isAddOrView = 'Edit';
    this.selectedPropertyId = row.propertyId;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.propertyForm.setValue({
        propertyName : row.propertyName,
        guest: row.guest,
        bedRoom: row.bedRoom,
        beds: row.beds,
        bathRoom: row.bathRoom,
        address: row.address,
        country: row.country,
        state: row.state,
        propertyOwner: this.authService.currentUserValue.email
    });
    this.selectedRowData = row;
  }

  addRow(content) {
    this.propertyForm.reset();
    this.isAddOrView = 'Add';
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  deleteRow(row) {
    const propertyId = row.propertyId;
    if (row.propertyId) {
      this.propertyDetailsService.deleteHotelProperty(propertyId).subscribe((response: any) => {
        this.showNotification(
          'bg-red',
          'Delete Record Successfully',
          'top',
          'right'
        );
        this.loadGetHotelProperty();
      });
    }
  }

  arrayRemove(array, id) {
    return array.filter(function(element) {
      return element.id != id;
    });
  }

  onEditSave(form: FormGroup) {
    // this.data = this.data.filter((value, key) => {
    //   if (value.id == form.value.id) {
    //     value.firstName = form.value.firstName;
    //     value.lastName = form.value.lastName;
    //     value.phone = form.value.phone;
    //     value.gender = form.value.gender;
    //     value.email = form.value.email;
    //     value.address = form.value.address;
    //   }
    //   this.modalService.dismissAll();
    //   return true;
    // });
    this.showNotification(
      'bg-black',
      'Edit Record Successfully',
      'top',
      'right'
    );
  }

  onAddRowSave(form: FormGroup) {
    this.data.push(form.value);
    this.data = [...this.data];
    // console.log(this.data);
    form.reset();
    this.modalService.dismissAll();
    this.showNotification(
      'bg-green',
      'Add Record Successfully',
      'top',
      'right'
    );
  }

  filterDatatable(event) {
    // get the value of the key pressed and make it lowercase
    const val = event.target.value.toLowerCase();
    // get the amount of columns in the table
    const colsAmt = this.columns.length;
    // get the key names of each column in the dataset
    const keys = Object.keys(this.filteredData[0]);
    // assign filtered matches to the active datatable
    this.data = this.filteredData.filter(function(item) {
      // iterate through each row's column data
      for (let i = 0; i < colsAmt; i++) {
        // check for a match
        if (
          item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 ||
          !val
        ) {
          // found match, return true to add to result set
          return true;
        }
      }
    });
    // whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  getId(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: ['bg-red'],
    });
  }

  showNotification(colorName, text, placementFrom, placementAlign) {
    this._snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  onSubmitProperty(): void  {
    if (this.propertyForm.invalid) {
      return;
    }
    const currentPropertyOwner: string = this.authService.currentUserValue.email;
    let formPropertyValues;
    if (currentPropertyOwner) {
        formPropertyValues = Object.assign(this.propertyForm.value, { propertyOwner: currentPropertyOwner});
    }

    if (this.isAddOrView === 'Add') {
      this.propertyDetailsService.addHotelProperty(formPropertyValues).subscribe((response: any) => {
        this._snackBar.open(response.Message, '', {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['bg-green'],
        });
        this.modalService.dismissAll();
        this.loadGetHotelProperty();
        this.propertyForm.reset();
      });
    } else {
      let formValue = formPropertyValues;
      formValue = Object.assign(formValue, {propertyId: this.selectedPropertyId});
      this.propertyDetailsService.editHotelProperty(formValue).subscribe((response: any) => {
        this._snackBar.open(response.Message, '', {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['bg-green'],
        });
        this.modalService.dismissAll();
        this.loadGetHotelProperty();
        this.propertyForm.reset();
      });
    }
  }
}
export interface selectRowInterface {
  img: String;
  firstName: String;
  lastName: String;
}
