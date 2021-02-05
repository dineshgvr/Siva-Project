import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IPropertyDetails } from '../../models/IPropertyDetails';
@Injectable({
  providedIn: 'root'
})
export class PropertyDetailsService {

  constructor(private httpClient: HttpClient) { }

  getHotels(email: string): Observable<IPropertyDetails> {
    return this.httpClient.get<IPropertyDetails>('http://roomstoinn.com:9090/viewHotel/' + email);
  }

  addHotelProperty(formValue: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.httpClient.post('http://roomstoinn.com:9090/addHotelInfo', JSON.stringify(formValue), httpOptions);
  }

  deleteHotelProperty(hotelId): Observable<any> {
    return this.httpClient.get('http://roomstoinn.com:9090/deleteHotel/' + hotelId);
  }

  editHotelProperty(formValue: any): Observable<any> {
    return this.httpClient.post('http://roomstoinn.com:9090/editProperty', formValue);
  }

}
