import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchRoomService {

  constructor(private _httpClient: HttpClient) { }

  getRoomAvailblity(searchDetails: any): Observable<any> {
    return this._httpClient.get<any>('http://localhost:9090/api/');
  }
}
