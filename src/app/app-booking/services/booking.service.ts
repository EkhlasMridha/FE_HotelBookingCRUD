import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomModel } from 'src/app/app-rooms/models/room.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor (private http: HttpClient) { }
  
  getAllroom() {
    return this.http.get<RoomModel[]>("room");
  }

  addGuest(payload:any) {
    return this.http.post("room/guest", payload);
  }
}
