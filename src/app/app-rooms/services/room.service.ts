import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomDetailModel } from '../models/room-detail.model';
import { RoomModel } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor (private http: HttpClient) { }
  
  createRoom(payload: any) {
    return this.http.post("room", payload);
  }

  getAllroom() {
    return this.http.get<RoomModel[]>("room");
  }

  deleteRoom(id: number) {
    return this.http.delete(`room/${id}`);
  }

  editRoom(id: number, payload: any) {
    return this.http.put(`room/${id}`, payload);
  }

  getRoomBookingDetails(roomId:number) {
    return this.http.get<RoomDetailModel[]>(`room/roominfo/${roomId}`);
  }
}
