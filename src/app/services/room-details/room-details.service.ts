import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomDetailsService {

  constructor(private httpClient: HttpClient) { }

  getRoomDetails(email: string): Observable<any> {
    return this.httpClient.get('http://roomstoinn.com:9090/viewRoom/' + email);
  }

  deleteRoomDetail(roomId: string): Observable<any> {
    return this.httpClient.get('http://roomstoinn.com:9090/deleteRoom/' + roomId);
  }

  addRoomDetails(roomDetail: any): Observable<any> {
    return this.httpClient.post('http://roomstoinn.com:9090/addRoom', roomDetail);
  }
}
