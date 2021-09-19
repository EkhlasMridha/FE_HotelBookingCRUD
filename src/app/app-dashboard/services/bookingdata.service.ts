import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookingsModel } from '../models/bookings.model';

@Injectable({
  providedIn: 'root'
})
export class BookingdataService {

  constructor (private http: HttpClient) { }
  
  getBookings() {
    return this.http.get<BookingsModel[]>("booking");
  }
}