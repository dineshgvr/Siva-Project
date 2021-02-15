import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PropertyDetailsService} from "../../../services/property-details/property-details.service";
import {SingInService} from "../../../services/signIn/sing-in.service";
import {AuthService} from "../../../core/service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-property-details',
  templateUrl: './add-property-details.component.html',
  styleUrls: ['./add-property-details.component.scss']
})
export class AddPropertyDetailsComponent implements OnInit {
  public propertyForm: FormGroup;
  public newUserImg = 'assets/images/user/user1.jpg';
  public isAddOrView = 'Add';
  public countryList: any[] = ['USA', 'India', 'UK', 'Canada'];
  constructor(
      private fb: FormBuilder,
      private _snackBar: MatSnackBar,
      private modalService: NgbModal,
      private propertyDetailsService: PropertyDetailsService,
      private signInService: SingInService,
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private router: Router
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

  ngOnInit(): void {
  }

  onSubmitProperty() {

  }
}
