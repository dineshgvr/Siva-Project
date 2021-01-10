import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.sass']
})
export class RoomDetailsComponent implements OnInit {
  public amenities = [
    'Bed Bath',
    'Hangers',
    'Shampoo',
    'LockOnRoom',
    'HairDryer'
  ];

  columns = [
    { name: 'Property ID' },
    { name: 'Amenities ID' },
    { name: 'Wifi' },
    { name: 'Iron' },
    { name: 'HairDryer' },
    { name: 'Hangers' },
    { name: 'FireExtin' },
    { name: 'FirstAidKit' },
    { name: 'Action' }
  ];

 // Form 1
 register: FormGroup;
 hide = true;
 // Form 2
 secondForm: FormGroup;
 hide2 = true;
 // Form 3
 thirdForm: FormGroup;
 hide3 = true;
 data = [];
 filteredData = [];

 constructor(private fb: FormBuilder) {
   this.initForm();
   this.initSecondForm();
   this.initThirdForm();
 }
  ngOnInit(): void {
    this.fetch((data) => {
      this.data = data;
      this.filteredData = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', './assets/data/mock.room-details-data.json');
    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };
    req.send();
  }



 initForm() {
   this.register = this.fb.group({
     first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
     last: [''],
     password: ['', [Validators.required]],
     email: [
       '',
       [Validators.required, Validators.email, Validators.minLength(5)],
     ],
     address: [''],
     city: ['', [Validators.required]],
     state: ['', [Validators.required]],
     country: ['', [Validators.required]],
     termcondition: [false, [Validators.requiredTrue]],
   });
 }
 initSecondForm() {
   this.secondForm = this.fb.group({
     first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
     last: [''],
     password: ['', [Validators.required]],
     email: [
       '',
       [Validators.required, Validators.email, Validators.minLength(5)],
     ],
     address: [''],
     city: ['', [Validators.required]],
     state: ['', [Validators.required]],
     country: ['', [Validators.required]],
     termcondition: [false, [Validators.requiredTrue]],
   });
 }
 initThirdForm() {
   this.thirdForm = this.fb.group({
     first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
     last: [''],
     password: ['', [Validators.required]],
     email: [
       '',
       [Validators.required, Validators.email, Validators.minLength(5)],
     ],
     address: [''],
     city: ['', [Validators.required]],
     state: ['', [Validators.required]],
     country: ['', [Validators.required]],
     termcondition: [false, [Validators.requiredTrue]],
   });
 }
 onRegister() {
   console.log('Form Value', this.register.value);
 }
 onsecondFormSubmit() {
   console.log('Form Value', this.secondForm.value);
 }
 onThirdFormSubmit() {
   console.log('Form Value', this.thirdForm.value);
 }

}
