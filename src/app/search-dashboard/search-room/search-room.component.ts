import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { SearchRoomService } from '../../services/search-room/search-room.service';
@Component({
  selector: 'app-search-room',
  templateUrl: './search-room.component.html',
  styleUrls: ['./search-room.component.sass']
})
export class SearchRoomComponent implements OnInit {
  public searchFormGroup: FormGroup;
  public roomTypes: string[] = ['Private', 'Shared'];

  constructor(private readonly _formBuilder: FormBuilder,
    private readonly _searchRoomService: SearchRoomService) { 
    this.searchFormGroup = this._formBuilder.group({
      location: new FormControl('North Carolina'),
      arrivedStartDate: new FormControl(new Date(), Validators.compose([Validators.required])),
      arrivedEndDate: new FormControl(new Date(new Date().setMonth(3)), Validators.compose([Validators.required])),
      roomType: new FormControl('', Validators.compose([Validators.required]))
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void  {
    console.log(this.searchFormGroup.value);
    if(this.searchFormGroup.valid) {
      this._searchRoomService.getRoomAvailblity(this.searchFormGroup.value).subscribe(response => {

      });
    }
  }
}
