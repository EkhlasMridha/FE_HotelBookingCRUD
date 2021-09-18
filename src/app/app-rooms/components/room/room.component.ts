import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRoomComponent } from '../../modal/add-room/add-room.component';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  addRoomModal() {
    this.dialog.open(AddRoomComponent, {
      minWidth: "500px",
      panelClass:"nopadding-modal"
    })
  }
}
