import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SettingModel} from "../models/setting.model"

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor (private http: HttpClient) { }
  
  saveSetting(payload:any) {
    return this.http.post("setting", payload);
  }

  getSettings() {
    return this.http.get<SettingModel>("setting");
  }
}
