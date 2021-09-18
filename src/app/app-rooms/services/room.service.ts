import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
