import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RoomDetailsService} from "../services/room-details/room-details.service";
import {AuthService} from "../core/service/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.sass']
})
export class RoomDetailsComponent implements OnInit {
    public roomDetailForm: FormGroup;
    public amenities = [
        'Bed Bath',
        'Hangers',
        'Shampoo',
        'LockOnRoom',
        'HairDryer'
    ];

    columns = [
        {name: 'roomPropId'},
        {name: 'Room Type'},
        {name: 'Amenities ID'},
        {name: 'Room Number'},
        {name: 'roomGuestNo'},
        {name: 'typeOfTenant'},
        {name: 'Wifi'},
        {name: 'Iron'},
        {name: 'HairDryer'},
        {name: 'Hangers'},
        {name: 'FireExtin'},
        {name: 'FirstAidKit'},
        {name: 'Action'}
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
    public roomType: string[] = ['private', 'shared'];

    constructor(private fb: FormBuilder,
                private roomDetailsService: RoomDetailsService,
                private authService: AuthService,
                private snackbar: MatSnackBar,
                private modalService: NgbModal) {
    }

    ngOnInit(): void {
        this.initialFormControl();
        this.loadRoomDetails();
    }

    initialFormControl() {
        this.roomDetailForm = this.fb.group({
            propertyId: new FormControl(''),
            roomType: new FormControl(''),
            roomNumber: new FormControl(''),
            guest: new FormControl(''),
            typeOfTenancy: new FormControl(''),
            roomSize: new FormControl(''),
            roomRate: new FormControl(''),
            bedBath: new FormControl(false),
            hangers: new FormControl(false),
            shampoo: new FormControl(false),
            lockOnRoom: new FormControl (false),
            hairDryer: new FormControl(false)
        });
    }

    loadRoomDetails() {
        this.roomDetailsService.getRoomDetails(this.authService.currentUserValue.email).subscribe((response: any) => {
            this.data = response.createRoomList;
        });
    }

    onRegister() {
        console.log('Form Value', this.register.value);
    }

    deleteRow(row) {
        this.roomDetailsService.deleteRoomDetail(row.hotelAmenId).subscribe((response: any) => {
            this.showNotification(
                'bg-red',
                'Delete Record Successfully',
                'bottom',
                'right'
            );
            this.loadRoomDetails();
        });
    }

    showNotification(colorName, text, placementFrom, placementAlign) {
        this.snackbar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName,
        });
    }

    public onSubmitRoomDetail() {
        if (this.roomDetailForm.invalid) return;
        const formValue: object = {
            roomPropId: this.roomDetailForm.value.propertyId ? this.roomDetailForm.value.propertyId : '',
            roomType: this.roomDetailForm.value.roomType,
            roomNumber: this.roomDetailForm.value.roomNumber,
            roomGuestNo: this.roomDetailForm.value.guest,
            typeOfTenant: this.roomDetailForm.value.typeOfTenancy,
            roomSize: this.roomDetailForm.value.roomSize,
            roomRate: this.roomDetailForm.value.roomRate,
            bedBath: this.roomDetailForm.value.bedBath ? "Yes" : "No",
            hangers: this.roomDetailForm.value.hangers ? "Yes" : "No",
            shampoo: this.roomDetailForm.value.shampoo ? "Yes" : "No",
            lockOnroom: this.roomDetailForm.value.lockOnRoom ? "Yes" : "No",
            hairDryer: this.roomDetailForm.value.hairDryer ? "Yes" : "No",
            propertyOwner: this.authService.currentUserValue.email
        };
        this.roomDetailsService.addRoomDetails(formValue).subscribe((reponse: any) => {
            this.snackbar.open(reponse.Message, '', {
                duration: 2000,
                verticalPosition: 'top',
                horizontalPosition: 'right',
                panelClass: ['bg-green'],
            });
            this.modalService.dismissAll();
            this.roomDetailForm.reset();
            this.loadRoomDetails();
        });
    }

    editRow(row: any, rowIndex: any) {
        this.roomDetailForm.patchValue({
            propertyId: row.roomId,
            roomType: row.roomType,
            roomNumber: row.roomNumber,
            guest: row.roomGuestNo,
            typeOfTenancy: row.typeOfTenant,
            roomSize: row.roomSize,
            roomRate: row.roomRate,
            bedBath: row.bedBath === "Yes" ? true : false,
            hangers: row.hangers === "Yes" ? true : false,
            shampoo: row.shampoo === "Yes" ? true : false,
            lockOnRoom: row.lockOnroom === "Yes" ? true : false,
            hairDryer: row.hairDryer === "Yes" ? true : false
        });
    }
}
