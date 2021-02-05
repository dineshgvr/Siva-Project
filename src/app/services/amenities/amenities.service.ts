import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AmenitiesService {

  constructor(private readonly httpClient: HttpClient) { }

  public getAmenities(currentEmail: string): Observable<any> {
   return this.httpClient.get<any>('http://roomstoinn.com:9090/viewHotelAmenities/' + currentEmail);
  }

  public addAmenities(amenity: any): Observable<any>  {
      return this.httpClient.post('http://roomstoinn.com:9090/addPropertyAmenities', amenity);
  }

  public deleteAmenities(amenitiesId: string): Observable<any> {
      return this.httpClient.get('http://roomstoinn.com:9090/deleteAmenities/' + amenitiesId);
  }
}
