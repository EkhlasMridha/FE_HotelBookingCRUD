import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BookingsModel } from '../../models/bookings.model';
import { BookingdataService } from '../../services/bookingdata.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  dataSource: MatTableDataSource<BookingsModel>;
  displayedColumns:string[]=["guestName","roomNumber","bookFrom","leaveAt","comments"]
  constructor(private bookingDataService:BookingdataService) { }

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings() {
    this.bookingDataService.getBookings().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
    })
  }
}
