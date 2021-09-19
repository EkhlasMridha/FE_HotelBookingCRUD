import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomModel } from 'src/app/app-rooms/models/room.model';
import { SettingModel } from 'src/app/app-settings/models/setting.model';
import { BookingsModel } from '../models/bookings.model';

@Injectable({
  providedIn: 'root'
})
export class BookingdataService {

  constructor (private http: HttpClient) { }
  
  getBookings() {
    return this.http.get<BookingsModel[]>("booking");
  }

  createBooking(payload: any) {
    return this.http.post("booking", payload);
  }

  deleteBooking(id: number) {
    return this.http.delete(`booking/${id}`);
  }

  getAllroom() {
    return this.http.get<RoomModel[]>("room/all");
  }

  getRoom(id: number) {
    return this.http.get<RoomModel>(`room/${id}`);
  }

  getSettings() {
    return this.http.get<SettingModel>("setting");
  }

  updateBooking(payload: any,bookingId:number) {
    return this.http.put(`booking/${bookingId}`,payload)
  }
}
