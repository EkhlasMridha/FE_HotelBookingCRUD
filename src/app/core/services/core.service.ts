import { Injectable, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IconService } from '@core/services/icon.service';
import { NavTracerService } from '@core/services/nav-tracer.service';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private _iconService: IconService;
  private _navTracerService: NavTracerService;

  public get iconService(): IconService {
    if (!this._iconService) {
      this._iconService = this._injector.get(IconService);
    }
    return this._iconService;
  }

  public get navTracerService(): NavTracerService {
    if (!this._navTracerService) {
      this._navTracerService = this._injector.get(NavTracerService);
    }

    return this._navTracerService;
  }
  
  constructor (private _injector: Injector) { }

  loadIcons(iconList: string[]) {
    this.iconService.loadIcons(iconList);
  }
}
