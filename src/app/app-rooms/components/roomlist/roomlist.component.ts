import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RoomModel } from '../../models/room.model';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.scss']
})
export class RoomlistComponent implements OnInit {
  dataSource: MatTableDataSource<RoomModel>;
  displayedColumns:string[] = ["roomNumber","capacity","rent"]
  constructor(private roomService:RoomService) { }

  ngOnInit(): void {
    this.getRoomDate()
  }

  getRoomDate() {
    this.roomService.getAllroom().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
    })
  }
}
